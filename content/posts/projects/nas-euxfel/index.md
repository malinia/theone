---
title: " Exploring NAS for Anomaly Detection at the European XFEL"
date: 2025-01-01
draft: false
cover:
  image: "/images/projects/NAS_diagram.jpg"
description: "Machine learning approaches for quench detection in superconducting radio-frequency cavities at the European XFEL."
tags:
  - Machine Learning
  - Quench Detection
  - SRF Cavities
  - European XFEL
  - Neural Architecture Search
---

## Overview

### Machine learning approaches for improving quench detection and diagnosis in superconducting RF cavities at the European XFEL

The European XFEL operates nearly 800 superconducting RF cavities, where reliable quench detection is essential for stable accelerator operation. This project investigates **machine learning (ML)** methods to distinguish true cavity quenches from other anomalies and reduce false alarms.

A key focus is **Neural Architecture Search (NAS)** to develop compact neural networks that could eventually be implemented on FPGAs within the accelerator's low-level RF system.

## Research

The approach combines the existing physics-based anomaly detection system with machine learning.

Anomalous cavity signals are identified using a **generalized likelihood ratio (GLR)**. Quench signals are then characterized using clustering with **Euclidean distance** and **Dynamic Time Warping (DTW)**. These features are provided to multilayer perceptrons (MLPs), which classify anomalies as quenches or other faults.

NAS is used to automatically find neural-network architectures that balance **classification performance and computational complexity**, supporting future real-time FPGA deployment.

## Results

The NAS-based approach achieved strong quench classification performance while significantly reducing model size.

* **AUROC of 0.995** for the Euclidean-distance approach.
* Approximately **70% reduction in model size** compared with a manually designed MLP.
* Reduced false-positive rates while maintaining high detection performance.
* Daily and long-term anomaly reports help experts identify cavity problems and operational trends.

The work was published in *Frontiers in Physics* in 2025:

**Boukela, L., Branlard, J., & Eichler, A. — “Exploring NAS for anomaly detection in superconducting cavities of particle accelerators.”**
