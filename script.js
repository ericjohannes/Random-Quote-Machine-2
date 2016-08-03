var json = "";

function getQuote() {
  $.getJSON( "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", 
        function(json) { 
          
          // write code to check for a trailing space and delete if it if necessary
          var quote = "";
          quote += "\"" + json.quoteText + "\"" 
          var author = "";
          if (json.quoteAuthor === '') {
            author = "Author unknown"
          }
          else {
            author += "-" + json.quoteAuthor;
          }
          $("#message").text(quote);
          $("#author").text(author);
          
           var tweet = '<a class="twitter-share-button"  href="https://twitter.com/intent/tweet?text=';
    tweet += json.quoteText;
    tweet += " -";
    tweet += author;
    tweet += '" ';
    tweet += 'data-size="large">Tweet</a>';
          
    $("#share-button").html(tweet);
    
          /*
          let tweet = "https://twitter.com/intent/tweet?text=" + json.quoteText + " -" + author;
          $("#share-button a").attr('href', tweet);
          */
           
      });
  
};
 /*(document).ready(function() { */
    getQuote();
   
    $("#getMessage").on("click", getQuote);
//});