---
title: QA Model
description: 'this page use only for QA model template'
position: 3.3
category: GUIDELINES 
subtitle: 'This page use only for QA model template'
# remove blow this line, only for example purposes
items:
  - Item1
  - Item2
  - Item3
---

## Introduction

### description
The get_next_line project is one of the projects where you can learn to use memory controllers like malloc and free in addition to dealing with static variables.
### Goals
The project is an algorithm that reads the file through the file descriptor through an integer value passed through a function call under the name BUFFER_SIZE and returns a line ending ```\n (new line)`` every time until the algorithm finishes Read the file completely.
### Assumptions

### Diagram (optional)

<mermaid>
graph TD
id1[Start]-->|FD & BUFFER_ZISE|id2{is True}
id2-->id3[01-ReadFd]-->id2
id2-->id5[02-found '\n`]-->id2
id2-->id6[03-return *line*]-->id3-->id5
id3-->|'\0'|id7[free var]-->id8[end]
</mermaid>


## Implementation

### Questions 01

Create project files, which are 3 files and are divided into:

<alert>
The files for the project have been distributed into 3 files to facilitate the process of organizing scripts during writing.
</alert>

<solution>

```

|->get_next_line.c    #The main scripts will be written in this file.
|->get_next_line_utils.c #Supporting scripts.
|->get_next_line.h  #The header file.

```
<alert typr="info">

The files for the project have been distributed into 3 files to facilitate the process of organizing scripts during writing.

</alert>

</solution>


--------

