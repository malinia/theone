---
title: "Adaptive Intrusion Detection with Active Learning"
date: 2024-01-01
draft: false
cover:
  image: "/images/projects/IDS2.png"
description: "An adaptive intrusion detection system that combines deep learning, active learning, and incremental learning to detect known and emerging cyberattacks while reducing the need for manual data labeling."
tags:
  - Machine Learning
  - Quench Detection
  - SRF Cavities
  - Particle Accelerators
---

## Overview

### A near-autonomous and incremental intrusion detection system through active learning of known and unknown attacks

This project develops an adaptive **Intrusion Detection System (IDS)** capable of detecting both known and previously unseen cyberattacks.

The system combines **deep learning, K-Nearest Neighbors (KNN), active learning, and incremental learning** to reduce the need for manual data labeling while continuously adapting to changing network traffic.

## Research

The proposed IDS combines two detection modules:

* A **Deep Neural Network (DNN)** for detecting known attacks.
* **KNN-based anomaly detection** for identifying potentially unknown attacks.

An active-learning strategy selects the most uncertain and anomalous network samples for review by a security expert. The newly labeled data are then used to retrain the DNN, allowing the system to learn newly discovered attacks over time.

Network traffic is processed using **sliding windows**, making the system incremental and able to adapt as new types of attacks appear.

## Results

Experiments were performed using the **CICIDS2017 dataset**, containing normal traffic and several types of cyberattacks.

* Using only **13% of the training data for labeling** achieved performance comparable to using the full training dataset.
* The system successfully learned to detect previously unseen attacks as they appeared.
* For example, after learning a new **Port Scan** attack, AUC recovered from below **0.50 to around 0.96**.
* The approach significantly reduces the labeling effort required from security experts while improving detection over time.

Future work includes multi-class attack classification, improved unsupervised detection, and methods for explaining newly detected attacks.
