---
layout: page
title: Color
description: Visualizing color in paintings @ the Harvard Art Museums
img: assets/img/proj/color_thumbnail.png
importance: 2
github: https://github.com/cynthia9chen/data-art/tree/main/Color%20in%20Paintings
category: data + art
---

<a href="https://github.com/cynthia9chen/data-art/tree/main/Color%20in%20Paintings"><i class="fab fa-github gh-icon"></i> Github</a>

A visualization of color in acrylic works @ the Harvard Art Museums. This piece is best viewed through <a href="https://openprocessing.org/sketch/1787722">the interactive version on OpenProcessing</a>.

As an <a href="https://20cynthiac.wixsite.com/mysite/portfolio">artist</a>, I have always been fascinated by the use of color. My favorite artistic medium has always been acrylic, due to the vivid and vibrant colors it is able to convey. I wondered, "would it be possible to somehow convey the beautiful diversity of colors found in various artworks?" When approaching this project, I stumbled upon the <a href="https://harvardartmuseums.org/collections/api">Harvard Art Museums API</a>, which granted access to a rich dataset of thousands of works in the Harvard Art Museums collection, including hundreds of acrylic paintings.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color_screenshot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of <a href="https://openprocessing.org/sketch/1787722">the interactive version OpenProcessing piece</a>.
</div>

Every circle in the visualization represents one painting, with concentric rings encoding the proportional color composition of the piece. In the interactive piece, one can hover over a circle to see the piece's title and artist, and click on a circle to see the artwork's webpage on the Harvard Art Museum webpage.

Each artwork was tagged with several features, including its medium, year of creation, style of artwork, culture, and colors used. The high-dimensional dataset of artwork features was then embedded into 2D space using the <a href="https://github.com/lmcinnes/umap">UMAP (Uniform Manifold Approximation and Projection) method</a>. These 2D coordinates were then relaxed using <a href="https://www.wikiwand.com/en/Lloyd%27s_algorithm">Lloyd's algorithm</a> to space the points out, as shown in the figures below. The UMAP coordinates were used as the location of each artwork's circle, thus placing artworks with similar features closer together in the visualization.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/umap1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/umap2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    UMAP embeddings. The original embedding coordinates are on the left, while the relaxed coordinates, spaced apart for visual purposes, are on the right.
</div>




<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color_poster.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Poster version.
</div>


