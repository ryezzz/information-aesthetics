<!DOCTYPE html>
<meta charset="utf-8">
<html>
  <head>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <style>
    
    body{
      background-color: black;
    }
    
    .circle {
	border-radius: 50%;
	width: 200px;
	height: 200px;
	background-color: white;
	/* width and height can be anything, as long as they're equal */
}
    #container{
      max-width:100%;
      height: 300px;
      
      /*border-bottom: .2px gray solid;*/
      background-color: black;
      /*position: absolute;			*/

    }
    
    #div1, #div2, #div3{
        /*border: 2px black solid;*/
        /*position: absolute;			*/
        max-width:30%;
        height:100%;
        float:left;
    }
    
    
    #div4{
      width: 100%;
      height: 1000px;
      float: left;
    }
    /*#div2{*/
        /*border: 2px black solid;*/
        /*position: absolute;	*/
    /*    max-height:100%;*/
    /*    max-width:300px;*/
    /*    float:left;*/
    /*}*/
    </style>
  </head>
<body>
  <!-- this came from Open Clip Art imported to Inkscape-->
<!--<?xml version="1.0" encoding="utf-8"?>-->
<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!--<div>-->
<!--<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--	 viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve">-->
<!--<style type="text/css">-->
<!--	.st0{fill:#70CBD3;}-->
<!--</style>-->
<!--<g>-->
<!--<path class="st0" d="M29.6,21.2L28.2,19l-2.5-2.1l-1.8-2.6l-2.9-2l-0.9-0.9l-0.4-0.6l1-0.7L21.4,9l0.8-1.5l-0.9,0.6l-0.9,1.1l-1,0.7-->
<!--	l-0.6,0.3c0,0-1.6,0.4-1.6,0.5s-1.2,0.9-1.4,0.9c-0.2,0-0.6,0.8-0.6,0.8l-2.1,0.3l-1.6-0.4l1.3,0.8l1.1,0l1.1,0.1l0.6,0.2l0.5,0.8-->
<!--	c0,0-0.4,1.2-0.3,1.4c0.1,0.2,1.2,4.1,1.2,4.1l1.1,2.4l1.2,2.9c0,0,0.6,2.5,0.7,2.6c0.1,0.2-0.4,2.4-0.4,2.4L18.5,30l-3-2.5-->
<!--	l-2.9-2.7l-1.7-1.4l-1.3-1.1l-1.2-0.4l-2-0.4l-1.6-0.3c0,0-1.8-0.2-2-0.2c-0.2,0.1-1.7,0.3-1.7,0.3l1.8,0.4l1.4,0.1L6,22.2L7.8,23-->
<!--	l1.7,0.7l2.1,2.3c0,0,1.6,1,1.7,1.2s0.9,0.9,1,1c0.1,0.1,1.4,1.1,1.4,1.1s1.1,0.6,1.2,0.7c0.1,0.2,1.4,1,1.5,0.9s1.5,0.4,1.5,0.4-->
<!--	l1.3,0l0.5-0.3l0.7,1.3l0.8,1.7l0,0.7l-1.8-0.4l-2.4-0.4c0,0-1.9-0.9-2.2-0.9c-0.2,0-2.1-1-2.1-1s-2-0.9-2.1-0.9-->
<!--	c-0.1,0.1-0.9,0.2-0.9,0.2l0.9,0.4c0,0,0.9,0.2,1,0.3c0.1,0.1,1.3,0.5,1.3,0.5l0.9,0.7l1.3,0.9l1.4,0.2l1.8,0.5l1.5,0.5l2,0l1.2,0.3-->
<!--	l0.2,0.8L25,37.4l0,1l0.4,0.8l0.6-1.5l0.3-1.1c0,0,0.2-0.7,0.5-0.8c0.2,0,1.3,0.7,1.3,0.7s0.5,0.5,0.3,0.7c-0.2,0.2-1.3,0.5-1.2,0.8-->
<!--	c0,0.3-0.5,1.6-0.5,1.6L26,41l0.9,1.5l0-2.3l0.8-2l1.2-0.8c0,0,0.6,0.3,0.7,0.4c0.1,0.1,1.4,1.1,1.4,1.1l0.6,2.2l0,2.8L31.5,47-->
<!--	L31.3,50l-1.1,4.3l-0.7,4.1l-0.9,3.3l0,1.6l-1.2,5.4l2-7.6l2.2-10.4l0.6-7.8L31.7,39c0,0,0.6-0.5,0.7-0.4s1.5-0.5,1.5-0.5l1.2-1-->
<!--	l0.3-0.5l3.5,1.1c0,0,2.1,0.1,2.2,0.2S45,38,45,38s5.7-0.2,5.9,0s3.1,0,3.1,0s3.4-0.5,3.5-0.3c0.1,0.2,2.8,0.4,2.8,0.4-->
<!--	s1.1,0.8,1.3,0.9s1.7,1.4,1.7,1.4l2.3,2.1c0,0,1.4,1.8,1.5,1.9c0.1,0.1,0.6,0,0.6,0l-2.5-2.9l-3-2.7l-2.2-1.2l-4-0.1l-7.1,0l-5.9,0-->
<!--	L38.5,37l-2.6-1l-1-1.3l-0.4-2l1.2,0.5l1.3,0.8l3.5,1.6l0.5-0.4l-1.5-0.4l-2.3-1.5L36.4,33l-1.5-0.9l-0.7-0.7L34,30.5l0.7-0.5l0.2-2-->
<!--	l0.4-2.4l0.4-2.4l1-2l1.4-1.4l1.3-0.8l0.6-0.7l-1.5,0.5l-1.9,1.6l-1.5,1.9c0,0-0.7,2.7-0.7,2.8c0,0.2-0.1,1.7-0.1,1.7s0,1-0.1,1.2-->
<!--	S33.8,29,33.8,29L33,28.9L32,26.7l-0.8-1.6L31,24.2l0.6-0.8c0,0,1.2,0,1.4,0c0.2,0.1,0.9-0.3,0.9-0.3l0.5-1.1l-0.8-2.7l-0.6-3-->
<!--	L32.3,14l-1.1-3.4l-0.5-1.1l-0.2-2.2L31,4.8l0.7-1.6l-0.1-0.7c0,0-0.7,0-0.6,0.3c0.1,0.3-0.5,1.7-0.5,1.7L30,6.7l0.2,3-->
<!--	c0,0,0,2,0,2.1c0.1,0.1,0.8,2.2,0.8,2.2l0.8,2.7l0.9,2.8l0.7,2l-1,0.4l-1.8-0.7L29.6,21.2z"/>-->
<!--</g>-->
<!--</svg>-->
<!--</div>-->
<div id = "container">
<!--<div id = "div1"></div>-->
<!--<div id = "div2"></div>-->

<div id = "div4">
</div>
  <script type="text/javascript">

    
    
//setup divs for experimentation
    var containerDivs =  function(){  
                        for(var i=1; i<divNumber; i++){
                        var container = d3.select('#container')
                        .append('div')
                        .attr('id', 'div'+ i)
                        .attr('class', 'autocreated')
                        
                        // var circle = container
                        //             .append('circle')
                        //             .attr('r', 30)
                        //             .attr('cx', w2)
                        //             .attr('cy', h2)
                        //             .style("fill", "white");
                        
                        }
                      }
                      
    var divNumber = 4;
    var w3 = window.innerWidth,
    h3 = window.innerHeight,
    nodes3 = [],
    node3
    group3 = 1;
    containerDivs()

  
var vis3 = d3.select("#div4").append("svg")
    .attr("width", w3)
    .attr("height", h3);


  


    // nodes3.distance([1000])
  
var force3 = d3.layout.force()
    .nodes(nodes3)
    .charge(-1)
    .linkDistance(120)
    .links([])
    .size([w3, h3])
    // .linkDistance(2000)
    .start();
    
// var distance = nodes3.linkDistance(300).start();
    //https://www.safaribooksonline.com/library/view/d3js-by-example/9781785280085/ch11s03.html
    //http://bl.ocks.org/d3byex/fc3aea9afd1230b516fd
    
force3.on("tick", function(e) {
  vis3.selectAll("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
});

setInterval(function(){

  // Add a new random shape.
  if (nodes3.length<1000){
  nodes3.push({
    type: d3.svg.symbolCircle,
    size: Math.random() * 3 + 4,
    x: 0,
    y: 500
    });
}
//I can customize the shapes by setting the path d http://bl.ocks.org/d3noob/11137963
// console.log(nodes3)
// nodes3.forEach(function(d) { d.y = d.depth * 2; });
// function distance() {
//   return 30;
// }
  // Restart the layout.
  force3.start();
  
  vis3.selectAll("path")
      .data(nodes3)
    .enter().append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", d3.svg.symbol()
        .size(function(d) { return d.size; })
        .type(function(d) { return d.type; }))
      .style("fill", "#70cbd3")
      .style("stroke", "#70cbd3")
      .style("stroke-width", "0px")
      .call(force3.drag);

}, 1);







     
                      
    var divNumber = 4;
    var w2 = window.innerWidth/2,
    h2 = window.innerHeight/3.5,
    nodes2 = [],
    node2
    group2 = 2;
    containerDivs()

  
var vis2 = d3.select("#div2").append("svg")
    .attr("width", w2)
    .attr("height", h2);

setTimeout(function() { 
  
  
  
  
  
var force2 = d3.layout.force()
    .nodes(nodes2)
    .links([])
    .size([w2, h2]);

force2.on("tick", function(e) {
  vis2.selectAll("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
});

setInterval(function(){

  // Add a new random shape.
  if (nodes2.length<25){
  nodes2.push({
    type: d3.svg.symbolCircle,
    size: Math.random() * 100 + 150,
    x: 50
    });
}
  // Restart the layout.
  force2.start();

  vis2.selectAll("path")
      .data(nodes2)
    .enter().append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", d3.svg.symbol()
        .size(function(d) { return d.size; })
        .type(function(d) { return d.type; }))
      .style("fill", "#70cbd3")
      .style("stroke", "#70cbd3")
      .style("stroke-width", "1.5px")
      .call(force2.drag);

}, 375);


// normal tree building stuff taken from a tutorial somewhere
var w = window.innerWidth/3,
    h = window.innerHeight/3.5,
    nodes = [],
    node
    group = 2;
  

var vis = d3.select("#div1").append("svg")
    .attr("width", w)
    .attr("height", h);

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .size([w, h]);

force.on("tick", function(e) {
  vis.selectAll("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
});

setInterval(function(){

  // Add a new random shape.
  if (nodes.length<25){
  nodes.push({
    type: d3.svg.symbolCircle,
    size: Math.random() * 100 + 150,
    y: 0
  });
}
  // Restart the layout.
  force.start();

  vis.selectAll("path")
      .data(nodes)
    .enter().append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", d3.svg.symbol()
        .size(function(d) { return d.size; })
        .type(function(d) { return d.type; }))
      .style("fill", "#70cbd3")
      .style("stroke", "#70cbd3")
      .style("stroke-width", "1.5px")
      .call(force.drag);

}, 375);

  
}, 2000);

  </script>
</body>
</html>