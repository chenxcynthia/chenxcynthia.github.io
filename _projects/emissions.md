---
layout: page
title: Emissions
description: CO2 emissions, broken down.
img: assets/img/proj/emissions_thumbnail.png
importance: 5
github: https://github.com/cynthia9chen/data-art/tree/main/Emissions
category: data viz
---

<div class = "projheader">
    <div class="links"><a href='https://github.com/cynthia9chen/data-art/tree/main/Emissions' class="btn z-depth-0" role="button"> <i class="fab fa-github gh-icon"></i> Github</a></div>
</div>

Data Source: <a href="https://cdiac.ess-dive.lbl.gov/ftp/ndp030/nation.1751_2014.ems">National CO2 Emissions from Fossil-Fuel Burning, Cement Manufacture, and Gas Flaring</a>.

The global climate change crisis is largely a result of the massive amounts of CO2 that are emitted every year. I wanted to visualize how CO2 emissions have changed throughout the decades and also give viewers an understanding of how dire the current situation and provide insight into a breakdown of where these emissions are coming from.

The dataset I found contained data from multiple countries, but I focused on the US data. I cleaned the data using Google Sheets, separating out into multiple columns describing the source of emission. In my visualization, every single square represents 10 million tons of carbon. The color of the square represents the source of the emission, ranging from solid fuels to cement production, which are denoted in the legend.


<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/emissions.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

View this piece on <a href="https://openprocessing.org/sketch/1866689">OpenProcessing</a>.


