var startingPoint = 20;
var quarterMile = 88;
var numberList = [];
var numberListSpacing =[];

//This loop will turn my numberlist variable into an array of numbers. That way I can
//create a rect for each number and calculate incremental spacing based on their values


    for (var i=0; i<quarterMile; i++){
        numberList.push(i)
    }
    
    console.log (numberList)
           
           
            d3.select('body')
                .append('svg')
                .attr('width', window.innerWidth)
                .attr('height', 500);
            
            var svg = d3.select('svg');
            // selectAll will select all of them
            // grabs element from dom and appends
            // go to the svg element and add an element called
            
           console.log(numberList)     
            svg.selectAll ('rect')
                .data(numberList)
                .enter()
                .append('rect')
                .attr('x', function(d){
                  return d*d/window.innerWidth})
                .attr('y', 50)
                .attr('width', function (d) { return window.innerWidth/quarterMile})
                .attr('height', 20);
                
     