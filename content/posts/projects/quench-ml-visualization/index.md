---
title: "GPS/GSM Vehicle Anti-Theft & Geolocation System"
date: 2024-01-01
draft: false
cover:
  image: "/images/projects/geolocation.png"
description: "Design and developement of an embedded vehicle geolocation system that combines GPS positioning with GSM communication to remotely locate a vehicle via SMS."
tags:
  - Embedded Systems
  - GPS/GSM
  - ARM Assembly
  - geolocation
---



The system was built around an **AT91SAM7S256 ARM7 microcontroller** and a **SIM908 GPS/GSM module**, with the firmware implemented in **ARM Assembly**. The microcontroller communicates with the SIM908 through a serial USART interface, handling GSM commands, incoming SMS messages, GPS data acquisition, and system control.

The system operates through an authentication-based SMS protocol. When a user sends a request containing the predefined password, the embedded system retrieves the vehicle's current GPS position, parses the **NMEA positioning data** received from the SIM908, extracts the latitude and longitude, formats the coordinates, and sends them back via SMS along with a **Google Maps link** for visualization. The system also supports secure password modification through authenticated SMS commands.

the software was designed as a modular embedded architecture covering **system initialization, serial communication, SMS processing, GPS/NMEA parsing, position formatting, authentication, password management, and message transmission**. The implementation involved low-level ARM Assembly programming, USART configuration, AT command handling, memory management, and direct interaction with the microcontroller's peripherals.

The complete system was validated through unit and integration testing, including USART communication tests on the AT91SAM7S256, SIM908 GSM/GPS tests, NMEA data acquisition, SMS transmission, position retrieval, authentication, and password modification.

**Technologies & Hardware:**
ARM Assembly · ARM7 · AT91SAM7S256 · SIM908 · GPS · GSM · SMS · NMEA · USART/UART · AT Commands · Embedded Systems · Keil µVision · JTAG/ULINK2
