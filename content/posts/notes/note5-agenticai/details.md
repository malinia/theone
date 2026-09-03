---

title: "Understanding Agentic AI - Extended"
date: 2026-08-31
draft: false

description: "A practical and technical introduction to Agentic AI, covering agents, tools, memory, planning, applications, and research."


image: "/images/notes/agentic-ai.jpg"


tags:

- Machine Learning
- Agentic AI
- Generative AI
- Large Language Models

---




## 1. Learning Objectives

By the end of this note, you should be able to:

* Understand what Agentic AI means and how it differs from a traditional LLM application.
* Identify the main components of an AI agent.
* Understand how agents reason, plan, use tools, and interact with their environment.
* Build a simple agent using Python.
* Understand concepts such as memory, tool use, planning, reflection, and multi-agent systems.
* Identify important research papers and software frameworks.
* Understand the limitations and risks of autonomous AI systems.

---

## 2. Overview

Agentic AI refers to AI systems that can **reason about a goal, decide what actions to take, use external tools, observe the results, and continue working until the task is completed**.

A traditional LLM application often follows:

```text
User → LLM → Answer
```

An agentic system is more like:

```text
             ┌───────────┐
             │   Goal    │
             └─────┬─────┘
                   ↓
              ┌─────────┐
              │  Agent  │
              └────┬────┘
                   ↓
          ┌─────────────────┐
          │ Reason / Plan   │
          └────────┬────────┘
                   ↓
             Choose Action
                   ↓
              ┌─────────┐
              │  Tool   │
              └────┬────┘
                   ↓
              Observe Result
                   ↓
                Update
                   │
                   └──────→ Repeat
```

The important difference is **the loop**. The system can take multiple actions instead of producing a single response.

A 2025 survey organizes agentic LLM research around three closely related capabilities: **reasoning, acting, and interacting**.

---

## 3. Motivation: Why Do We Need Agents?

LLMs are very good at generating and transforming information, but many real-world tasks require more than generating text.

Consider the task:

> "Find the latest papers about anomaly detection, compare them, create a summary, and save the results."

A normal chatbot can generate a response, but completing the entire task may require:

1. Searching for papers.
2. Opening and reading them.
3. Extracting relevant information.
4. Comparing results.
5. Writing a report.
6. Saving the report.

An agent can coordinate these steps and use tools to perform actions.

This changes the role of an LLM from:

**"Generate an answer."**

to:

**"Figure out how to accomplish the task."**

---

## 4. Intuition

A useful way to think about an AI agent is as a **digital worker**.

The LLM provides reasoning and language capabilities, while the surrounding system provides:

* Tools
* Memory
* State
* Planning
* Execution
* Feedback
* Access to external information

For example, a research agent might have:

```text
                  Research Agent
                        │
       ┌────────────────┼────────────────┐
       ↓                ↓                ↓
    Search           Papers          Database
       │                │                │
       └────────────────┼────────────────┘
                        ↓
                     Memory
                        ↓
                    Planning
                        ↓
                    Report
```

The LLM itself is not necessarily the entire agent. The **agent is the complete system surrounding the model**.

---

## 5. Key Concepts

### 5.1 Agent

An agent is a system capable of pursuing a goal by selecting and executing actions.

A simple abstraction is:

```text
Agent = Model + Tools + State + Control Loop
```

More sophisticated systems add memory, planning, reflection, multiple agents, and safety mechanisms.

---

### 5.2 Tool Use

Tools allow an agent to interact with the outside world.

Examples include:

* Web search
* Python execution
* Databases
* APIs
* File systems
* Calculators
* Email
* Software development tools
* Laboratory or industrial systems

Tool use is one of the key developments behind modern agentic systems. Toolformer demonstrated that language models can learn when and how to call external APIs such as calculators, search engines, and question-answering systems.

---

### 5.3 Planning

Complex tasks often need to be divided into smaller steps.

For example:

```text
Goal:
Write a report about RAG

       ↓

1. Find important papers
       ↓
2. Read papers
       ↓
3. Identify key concepts
       ↓
4. Find implementations
       ↓
5. Compare approaches
       ↓
6. Write report
```

Planning can be explicit, where the agent creates a task list, or implicit, where the model decides the next action step-by-step.

---

### 5.4 Reasoning and Acting

One of the influential approaches is **ReAct**, which combines reasoning and action in an iterative loop.

```text
Reason
  ↓
Act
  ↓
Observe
  ↓
Reason
  ↓
Act
  ↓
...
```

The original ReAct paper showed that interleaving reasoning with actions allows models to interact with external information sources and improve performance on reasoning and interactive decision-making tasks.

---

### 5.5 Memory

Agents may need information beyond the current context window.

Memory can include:

* Conversation history
* User preferences
* Previous observations
* Retrieved documents
* Past actions
* Learned information

A common distinction is:

**Short-term memory**

Information relevant to the current task or conversation.

**Long-term memory**

Information stored and retrieved across multiple interactions.

Generative Agents demonstrated an architecture where observations are stored as experiences, synthesized into higher-level reflections, and retrieved later to influence planning and behavior.

---

### 5.6 Reflection

An agent can evaluate its own intermediate results.

For example:

```text
Generate solution
      ↓
Evaluate solution
      ↓
Identify problems
      ↓
Improve solution
```

Reflection can improve performance on complex tasks, although it also introduces additional computation and does not guarantee that the agent will correctly identify its own mistakes.

---

### 5.7 Multi-Agent Systems

Instead of using one agent, a system can use several specialized agents.

```text
                 Manager Agent
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   Researcher       Coder         Reviewer
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                    Result
```

Different agents can have different tools, instructions, and responsibilities.

This can be useful for complex workflows but also introduces additional coordination and reliability problems.

---

## 6. How Does an Agent Work?

A basic agent loop can be represented as:

```text
User Goal
   ↓
Understand Task
   ↓
Plan / Decide Next Step
   ↓
Choose Tool
   ↓
Execute Tool
   ↓
Observe Result
   ↓
Update State
   ↓
Task Complete?
   ├── No → Continue
   └── Yes → Generate Result
```

In pseudocode:

```python
while not task_complete:
    decision = model(state)

    if decision.requires_tool:
        result = execute_tool(decision.tool)
        state.update(result)
    else:
        return decision.answer
```

This simple loop is the foundation of many agentic architectures.

---

## 7. Main Approaches

### ReAct Agents

Combine reasoning and action in an iterative loop.

**Strength:** Simple and flexible.

**Limitation:** Can require many model/tool calls and may accumulate errors.

---

### Planning-Based Agents

First create a plan and then execute its individual steps.

**Strength:** Useful for long, structured tasks.

**Limitation:** An initial plan can become outdated when the environment changes.

---

### Reflection-Based Agents

Generate a result, evaluate it, and improve it.

**Strength:** Useful for iterative tasks such as writing and coding.

**Limitation:** Additional model calls increase cost and latency.

---

### Tool-Using Agents

Focus on giving an LLM access to external functions and APIs.

**Strength:** Extends the capabilities of the model beyond its internal knowledge.

**Limitation:** Tool selection and arguments can be incorrect.

---

### Multi-Agent Systems

Multiple specialized agents collaborate on a problem.

**Strength:** Enables specialization and parallel work.

**Limitation:** Coordination can become complex and unreliable.

---

## 8. Practical Python Example

A minimal tool-using agent can be conceptualized as:

```python
from langchain.agents import create_agent
from langchain.tools import tool

@tool
def calculate(expression: str) -> str:
    """Calculate a mathematical expression."""
    return str(eval(expression))

agent = create_agent(
    model="your-model",
    tools=[calculate],
)

result = agent.invoke({
    "messages": [
        {"role": "user", "content": "Calculate 125 * 37"}
    ]
})
```

The important concept is not the particular framework. The agent receives a task, decides whether a tool is needed, calls the tool, and uses the result to produce its response.

Modern LangChain agents are built around this model/tool loop, while LangGraph provides lower-level orchestration for stateful and long-running agents.

---

## 9. Python Libraries & Tools

The agent ecosystem is evolving rapidly, but several important frameworks are worth knowing.

### LangChain / LangGraph

LangChain provides higher-level components for building LLM applications and agents.

**LangGraph** provides lower-level orchestration for long-running, stateful agents, including persistence, streaming, human-in-the-loop workflows, and durable execution.

### Microsoft AutoGen

AutoGen provides abstractions for building conversational and multi-agent systems.

### CrewAI

CrewAI focuses on collaborative agents, roles, tasks, and multi-agent workflows.

### Other Important Components

Agent systems commonly use additional technologies for:

* Vector databases
* Web search
* Model APIs
* Observability
* Evaluation
* Code execution
* Sandboxed environments
* Persistent storage

The framework is only one part of an agent architecture.

---

## 10. Applications

Agentic AI is particularly useful for tasks that involve multiple steps, decisions, and external tools.

### Research Agents

Agents can search papers, retrieve information, compare studies, and generate reports.

### Software Development

Agents can inspect code, write new code, execute tests, debug errors, and iterate.

### Data Analysis

An agent can load datasets, write Python code, generate visualizations, analyze results, and produce a report.

### Customer Support

Agents can retrieve customer information, search documentation, and perform actions through business systems.

### Scientific Research

Agents can help formulate hypotheses, search literature, analyze experimental data, and coordinate computational workflows.

### Automation

Agents can interact with APIs and business systems to automate complex workflows.

A 2025 survey highlights applications including medical diagnosis, logistics, financial analysis, and scientific research.

---

## 11. Advantages & Limitations

### Advantages

* Can perform multi-step tasks.
* Can use external tools and information.
* Can adapt to intermediate results.
* Can automate complex workflows.
* Can combine reasoning with actions.
* Can work with heterogeneous data sources.

### Limitations

* LLMs can still hallucinate.
* Agents can choose incorrect tools.
* Tool calls can fail.
* Long tasks can accumulate errors.
* Multiple model calls can be expensive.
* Agent behavior can be difficult to reproduce.
* Autonomous actions introduce security and safety risks.

### When Should You Use It?

Agentic approaches are most useful when a problem requires:

**Multiple steps + decisions + external tools + adaptation.**

### When Should You Not Use It?

If the task can be reliably solved with a simple deterministic program, traditional automation may be preferable.

An agent is not automatically better simply because it is more autonomous.

---

## 12. Important Papers

### ReAct — 2022

**Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models."**

One of the foundational papers for modern LLM agents. It introduced an approach where reasoning and actions are interleaved, allowing the model to interact with external environments and information sources.

### Toolformer — 2023

**Schick et al., "Toolformer: Language Models Can Teach Themselves to Use Tools."**

Explored how language models can learn to decide when to call APIs, what arguments to provide, and how to incorporate tool results.

### Generative Agents — 2023

**Park et al., "Generative Agents: Interactive Simulacra of Human Behavior."**

Introduced an architecture combining memory, reflection, planning, and observation to create believable interactive agents.

### Agentic Large Language Models — 2025

**Plaat et al., "Agentic Large Language Models, a survey."**

Provides a broad overview of the field and organizes research around reasoning, acting, and interaction. It is particularly useful as an entry point into the broader literature.

---

## 13. Related Concepts

Agentic AI sits at the intersection of several areas:

```text
                 Large Language Models
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
       Reasoning       RAG          Tool Use
          │              │              │
          └──────────────┼──────────────┘
                         ↓
                     AI Agents
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
           Memory              Planning
              │                     │
              └──────────┬──────────┘
                         ↓
                  Multi-Agent AI
```

Related topics worth studying:

* Large Language Models
* Prompt Engineering
* Function Calling
* Tool Use
* RAG
* Vector Databases
* Embeddings
* Reinforcement Learning
* Planning
* Memory
* Multi-Agent Systems
* Human-in-the-Loop AI
* AI Evaluation

---

## 14. Practical Considerations

Building a useful agent is not only about selecting a good LLM.

Important engineering considerations include:

### Reliability

How often does the agent complete the task correctly?

### Cost

How many model and tool calls are required?

### Latency

How long does a complete task take?

### Observability

Can we inspect what the agent did and why?

### Security

What happens if the agent receives malicious instructions or accesses sensitive tools?

### Human Oversight

Which actions should require human approval?

### State and Memory

What information should persist between tasks?

### Evaluation

How do we measure whether an agent is actually improving?

For production systems, frameworks increasingly provide mechanisms for persistence, tracing, guardrails, retries, and human approval.

---

## 15. Exercises

### Exercise 1 — Conceptual

Explain the difference between:

1. A chatbot
2. An LLM application
3. A tool-using LLM
4. An AI agent
5. A multi-agent system

---

### Exercise 2 — Build a Simple Agent

Create an agent with two tools:

* A calculator
* A web/search function

Ask it questions that require both tools.

---

### Exercise 3 — Add Memory

Modify the agent so that it remembers information between multiple interactions.

---

### Challenge

Build a small **research assistant** that:

1. Searches for papers.
2. Retrieves relevant documents.
3. Extracts key information.
4. Compares papers.
5. Produces a structured report.

---

## 16. Open Questions & Future Directions

Agentic AI is still an active research area.

Important questions include:

* How can agents become more reliable?
* How should long-term memory be represented?
* How can agents learn from their own experience?
* How should multi-agent systems coordinate?
* How can agent behavior be evaluated consistently?
* How can we prevent harmful or unintended actions?
* How much autonomy should an agent have?
* Can agents perform meaningful scientific discovery?
* How can agents operate efficiently on constrained hardware?

A major research challenge is moving from agents that **appear capable** to systems that are **predictably reliable**.

---

## 17. My Research / Projects

This section can be expanded as Agentic AI becomes relevant to future projects.

### Project

**Objective:** ...

**Agent architecture:** ...

**Tools:** ...

**Memory:** ...

**Model:** ...

**Evaluation:** ...

**Results:** ...

**Lessons learned:** ...

---

## 18. Key Takeaways

* Agentic AI extends LLMs with **actions, tools, state, and feedback loops**.
* The core idea is not simply generating an answer, but **working toward a goal**.
* ReAct is an important foundation for combining reasoning and action.
* Tools allow agents to interact with external systems.
* Memory allows agents to maintain information across interactions.
* Planning and reflection can help with complex tasks.
* Multi-agent systems allow specialized agents to collaborate.
* Autonomy introduces new challenges around reliability, security, cost, and evaluation.

---

## 19. Quick Summary

**Agentic AI** is about building AI systems that can do more than generate text: they can **reason, plan, use tools, remember information, and take actions**.

The basic idea is:

**Goal → Reason → Act → Observe → Repeat**

The most important shift is from **AI that answers questions** to **AI that can accomplish tasks**.

Agentic AI is particularly promising for research, software development, data analysis, automation, and scientific workflows. However, greater autonomy also means greater responsibility for reliability, security, and human oversight.

---

## 20. Further Reading

### Papers

* Yao et al. — *ReAct: Synergizing Reasoning and Acting in Language Models*
* Schick et al. — *Toolformer: Language Models Can Teach Themselves to Use Tools*
* Park et al. — *Generative Agents: Interactive Simulacra of Human Behavior*
* Plaat et al. — *Agentic Large Language Models, a survey*

### Tools

* LangChain
* LangGraph
* Microsoft AutoGen
* CrewAI

### Related Topics

* Large Language Models
* RAG
* Vector Databases
* Active Learning
* Anomaly Detection

---

## 21. References

1. Yao, S. et al. (2022). *ReAct: Synergizing Reasoning and Acting in Language Models.*
2. Schick, T. et al. (2023). *Toolformer: Language Models Can Teach Themselves to Use Tools.*
3. Park, J. S. et al. (2023). *Generative Agents: Interactive Simulacra of Human Behavior.*
4. Plaat, A. et al. (2025). *Agentic Large Language Models, a survey.*
5. LangGraph Documentation — Agent orchestration and stateful agent systems.
