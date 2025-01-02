---
title: "tiny-cuda-nn-32"
summary: "A drop-in replacement for tiny-cuda-nn, which uses FP32 across all operations to avoid potential arithmetic overflow."
date: "Sep 29 2022"
tags:
  - CUDA
  - NeRF
demoUrl: https://github.com/YOUSIKI/tiny-cuda-nn-32
repoUrl: https://github.com/YOUSIKI/tiny-cuda-nn-32
---

tiny-cuda-nn-32 is a drop-in replacement for tiny-cuda-nn, which uses FP32 across all operations to avoid potential arithmetic overflow. This project aims to provide a more stable and reliable implementation for neural rendering tasks, especially when dealing with high dynamic range data. By using FP32, tiny-cuda-nn-32 ensures that the precision and accuracy of the computations are maintained, reducing the risk of numerical errors and overflow issues that can occur with FP16.
