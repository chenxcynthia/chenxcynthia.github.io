---
layout: page
title: Relationships Over Time
description: How did 3000 romantic relationships fare over time? 
img: assets/img/proj/relationships_thumbnail.png
importance: 1
github: https://github.com/chenxcynthia/data-art/tree/main/Relationships%20Over%20Time
category: data viz
---

<div class = "projheader">
    <div class="links"><a href='https://openprocessing.org/sketch/1786815' class="btn z-depth-0" role="button"> Interactive Version</a></div>
    <div class="links"><a href='https://github.com/chenxcynthia/data-art/tree/main/Relationships%20Over%20Time' class="btn z-depth-0" role="button"> <i class="fab fa-github gh-icon"></i> Github</a></div>
    <div class="links"><a href='https://www.informationisbeautifulawards.com/showcase/6291-relationships-over-time' class="btn z-depth-0" role="button">IIB Awards Page</a></div>
</div>


<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/relationships.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of OpenProcessing version.
</div>

We often hear stories of how romantic relationships progress and fare from an individual standpoint, but rarely consider the behavior of these relationships en masse. In this piece, I sought to depict the constantly changing flow of relationships across thousands of couples.


Using the dataset ["How Couples Meet and Stay Together"](https://data.stanford.edu/hcmst) collected by Stanford University researchers, I created this visualization around three thousand relationships and their progression over the course of three years. Every thin line represents a single relationship, where the color encodes the final state of the relationship (dating, married, divorced, or partner widowed). At each pinch point in the visualization, each representing a different timestamp, some relationships change, and the lines move to locations corresponding to the new state. The result is a river of lines that ebbs and flows over time.



