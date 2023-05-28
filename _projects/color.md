---
layout: page
title: Color
description: A study on color in paintings @ Harvard Art Museums.
img: assets/img/proj/color/thumbnail.png
importance: 2
github: https://github.com/cynthia9chen/data-art/tree/main/Color%20in%20Paintings
category: data viz
---

<div class = "projheader">
    <div class="links"><a href='https://openprocessing.org/sketch/1787722' class="btn z-depth-0" role="button">Interactive Version</a></div>
    <div class="links"><a href='https://github.com/cynthia9chen/data-art/tree/main/Color%20in%20Paintings' class="btn z-depth-0" role="button"> <i class="fab fa-github gh-icon"></i> Github</a></div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color/screenshot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of <a href="https://openprocessing.org/sketch/1787722">the interactive version OpenProcessing piece</a>.
</div>

**Motivation.**
As an <a href="https://20cynthiac.wixsite.com/mysite/portfolio">artist</a>, I have always been fascinated by the use of color. My favorite artistic medium has always been acrylic, due to the vivid and vibrant colors it is able to convey. I wondered, "would it be possible to somehow convey the beautiful diversity of colors found in various artworks?" When approaching this project, I stumbled upon the <a href="https://harvardartmuseums.org/collections/api">Harvard Art Museums API</a>, which granted access to a rich dataset of thousands of works in the Harvard Art Museums collection, including hundreds of acrylic paintings.

**How was the data visualized?** Every circle in the visualization represents one painting. The concentric rings in each circle encode the proportional color composition of the piece. By putting all the painting circles in one frame, one can get a sense of the types of color schemes used in the museum paintings. In the interactive piece, you can hover over a circle to see the piece's title and artist, and you can also learn even more about an artwork by clicking on a circle to open the artwork's official page on the Harvard Art Museum website.

To determine where each painting is placed in the visualization, I employed a data dimension reduction technique called <a href="https://github.com/lmcinnes/umap">UMAP (Uniform Manifold Approximation and Projection)</a>. I first compiled a high-dimensional dataset, where each artwork was tagged with several features, including its medium, year of creation, style of artwork, culture, and colors used. The high-dimensional dataset of artwork features was then projected onto 2D space using UMAP. These 2D coordinates were then relaxed using <a href="https://www.wikiwand.com/en/Lloyd%27s_algorithm">Lloyd's algorithm</a> to evenly space the points out, as shown in the figures below. The UMAP coordinates were used to place each artwork in the resulting visualization; thus artworks with similar features are closer together in the visualization.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color/umap1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color/umap2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    UMAP embeddings of the 293 paintings in the dataset. Several artwork properties including medium, style, and culture of origin were used to form the high-dimensional dataset. The original embedding coordinates are on the left, while the relaxed coordinates, spaced apart for visual purposes, are on the right.
</div>


This piece is best viewed through <a href="https://openprocessing.org/sketch/1787722">the interactive version on OpenProcessing</a>. In addition to the interactive version, I also came up with a poster version with small multiples as shown below. Some future directions that I hope to eventually explore include arranging the artworks by time period and noting any color patterns that arise and perhaps adding animations between these two arrangements.


<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/color/poster.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Poster version.
</div>


&#8202;

This project was completed as part of the course CS 73: Code, Data, and Art. 

<i> **Questions or feedback on this project?** Email me at cynthiachen@college.harvard.edu.</i>

&#8202;