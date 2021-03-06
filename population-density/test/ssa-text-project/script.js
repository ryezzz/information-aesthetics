var chapter14Arr = [];
var chapter14ArrParsed = [];
var wordCount = chapter14Arr.length;
var stopWords = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount",  "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as",  "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "got", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"]
            //create svg and append "g element"
            
var scale = d3.scaleLinear()
            .domain([100, 500])
            .range([10, 350]);
                      
                  

//convert text to string of objects manually


d3.text("/project-2/ssa-text-project/data/14undp.txt", function(error, text) {
      
      
      var svg = d3.select('body')
                .append('svg')
                .attr('width', window.innerWidth)
                .attr('height', "2000px");
                  
      var group = d3.selectAll('svg')
                  .append('g');
                  
     
                  
                  
      if (error) throw error;
      
      //split automatically turns strings into array, so I don't have to make another array
      //first converting enter into space and then splitting at spaces
      text = text.replace(/(\r\n|\n|\r)/gm,  ' ').split(' ')
      
      
      //run text through a foreach function 
      text.forEach(function(word){
            
      //create single SVG that wraps around all text elements
      // var svg = d3.select('svg');
        
        //numbers kept on showing up at the end of words, so I removed that part of each string
          for(var l=0; l<word.length; l++){
            if (word[l]*1){
              word = word.substring(0, l)
            }
          }
        
        
         //I want to make sure my words are relevant, so I'm getting rid of stop words before analysis
          for (var i=0; i<stopWords.length; i++) {
              if (word.toLowerCase() === stopWords[i] || word*1){
                word = "stopword";
              }
            }
          
          
          //change word to lower case and delete punctuation. Replace "cent" with "percent"
          word = word.toLowerCase().replace(/[^\w\s]/gi, '').replace("cent", "percent");
          
          //I don't understand what this part does
          wordCount = chapter14Arr.filter(function(element){
              //???
              return element.word == word;
          })  
          
        

          //check word count has length, if it is 0, add 1. Otherwise, stick the words
          //in an object with this specific format and calculate the count. Is cout something
          //automatic throug Javascript?
          
          if (wordCount.length){
              wordCount[0].count++;
            } else if (word != "stopword" && word.length>1){
              chapter14Arr.push({word: word, count: 1});
            } 
        
      //     var text = group.append('text')
      //               .data(chapter14Arr.word)
      //               .enter()
      //               .text(function(d){return d.word})
      });
      
    //create chapter 14 arr parsed based on numbers
      for ( var l = 0; l<chapter14Arr.length; l++){
          
          if (chapter14Arr[l].count*1 > 10){
          chapter14ArrParsed .push (chapter14Arr[l]);
          }
          
      }
      
      
      
      console.log(chapter14ArrParsed);
      var textElems = group.selectAll("text")
                        //binds word object array to group
                       .data(chapter14ArrParsed)
                       .enter()
                       .append("text")
                       .style("font-size", function(d) { return d.count*.5 + "px"; })
                        // .attr("text-anchor", "middle")
                        .attr("y", function(d) {return (d.count*5)})
                        .attr("x", function(d) {window.innerWidth/2})
                       //adds text to text element
                       .text( function (d) { return (d.word) });
});



//div-svg-g-text-/text-/g/-/svg/div


//Analyzing using Rita
// d3.text("/project-2/ssa-text-project/data/14undp.txt", function(error, text) {

  
  
// });



// console.log(Rita)