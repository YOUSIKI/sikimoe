---
title: "Complementary Intrinsics From Neural Radiance Fields and CNNs for Outdoor Scene Relighting"
summary: "Accepted to CVPR 2023"
date: "Jun 18 2023"
draft: false
tags:
  - CVPR
  - NeRF
  - Relighting
---

<div class="authors text-lg opacity-75 mb-6">
Siqi Yang, Xuanning Cui, Yongjie Zhu, Jiajun Tang, Si Li, Zhaofei Yu, Boxin Shi
</div>

<div class="publication-source mb-8">
<div class="text-sm uppercase tracking-wide opacity-60 mb-2">Published in</div>
<div>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition</div>
</div>

<div class="abstract">
<div class="text-sm uppercase tracking-wide opacity-60 mb-2">Abstract</div>
<div class="text-justify">
Relighting an outdoor scene is challenging due to the diverse illuminations and salient cast shadows. Intrinsic image decomposition on outdoor photo collections could partly solve this problem by weakly supervised labels with albedo and normal consistency from multi-view stereo. With neural radiance fields (NeRFs), editing the appearance code could produce more realistic results without explicitly interpreting the outdoor scene image formation. This paper proposes to complement the intrinsic estimation from volume rendering using NeRFs and from inversing the photometric image formation model using convolutional neural networks (CNNs). The former produces richer and more reliable pseudo labels (cast shadows and sky appearances in addition to albedo and normal) for training the latter to predict interpretable and editable lighting parameters via a single-image prediction pipeline. We demonstrate the advantages of our method for both intrinsic image decomposition and relighting for various real outdoor scenes.
</div>
</div>