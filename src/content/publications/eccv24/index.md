---
title: "Real-Data-Driven 2000 FPS Color Video from Mosaicked Chromatic Spikes"
summary: "Accepted to ECCV 2024"
date: "Sep 29 2023"
draft: false
tags:
  - ECCV
  - Spike Camera
---

<div class="authors text-lg opacity-75 mb-6">
Siqi Yang, Zhaojun Huang, Yakun Chang, Bin Fan, Zhaofei Yu, Boxin Shi
</div>

<div class="publication-source mb-8">
<div class="text-sm uppercase tracking-wide opacity-60 mb-2">Published in</div>
<div>European Conference on Computer Vision</div>
</div>

<div class="abstract">
<div class="text-sm uppercase tracking-wide opacity-60 mb-2">Abstract</div>
<div class="text-justify">
The spike camera continuously records scene radiance with high-speed, high dynamic range, and low data redundancy properties, as a promising replacement for frame-based high-speed cameras. Previous methods for reconstructing color videos from monochromatic spikes are constrained in capturing full-temporal color information due to their reliance on compensating colors from low-speed RGB frames. Applying a Bayer-pattern color filter array to the spike sensor yields mosaicked chromatic spikes, which complicates noise distribution in high-speed conditions. By validating that the noise of short-term frames follows a zero-mean distribution, we leverage this hypothesis to develop a self-supervised denoising module trained exclusively on real-world data. Although noise is reduced in short-term frames, the long-term accumulation of incident photons is still necessary to construct HDR frames. Therefore, we introduce a progressive warping module to generate pseudo long-term exposure frames. This approach effectively mitigates motion blur artifacts in high-speed conditions. Integrating these modules forms a real-data-driven reconstruction method for mosaicked chromatic spikes. Extensive experiments conducted on both synthetic and real-world data demonstrate that our approach is effective in reconstructing 2000FPS color HDR videos with significantly reduced noise and motion blur compared to existing methods.
</div>
</div>
