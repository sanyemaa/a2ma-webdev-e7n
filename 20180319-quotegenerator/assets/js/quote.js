var button = document.querySelector("#quote-button");
var quote = document.querySelector("#quote-p");
var quoteMagazine = [{quote: "Hello there!", quotee: "General Kenobi!"},{quote: "I have the higher ground.", quotee: "General Kenobi!"},{quote: "Don't try it!", quotee: "General Kenobi!"},{quote: "Your own anger and lust for power have already done that.", quotee: "General Kenobi!"}];
var randomQuote = 0;


button.addEventListener("click", function(){
    randomQuote = Math.floor(Math.random() * quoteMagazine.length);
    quote.innerHTML = "\"" + quoteMagazine[randomQuote].quote + "\"";
    getQuote();
    // alert(quoteMagazine.length);
});


function getQuote(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a){
        $("#testdiv").append(a[0].content + "<p>$mdash; " + a[0].title + "</p>")
    });
}


/*
  Code by Gabriel Nunes
*/

// function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

// var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
// var currentQuote = '', currentAuthor = '';
// function openURL(url){
//   window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
// }
// function getQuote() {
//   $.ajax({
//     headers: {
//       "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
//     success: function(r) {
//       if (typeof r === 'string') {
//        r = JSON.parse(r); 
//       }
//       currentQuote = r.quote;
//       currentAuthor = r.author;
//       if(inIframe())
//       {
//         $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//         $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
//       }
//       $(".quote-text").animate({
//           opacity: 0
//         }, 500,
//         function() {
//           $(this).animate({
//             opacity: 1
//           }, 500);
//           $('#text').text(r.quote);
//         });

//       $(".quote-author").animate({
//           opacity: 0
//         }, 500,
//         function() {
//           $(this).animate({
//             opacity: 1
//           }, 500);
//           $('#author').html(r.author);
//         });

//       var color = Math.floor(Math.random() * colors.length);
//       $("html body").animate({
//         backgroundColor: colors[color],
//         color: colors[color]
//       }, 1000);
//       $(".button").animate({
//         backgroundColor: colors[color]
//       }, 1000);
//     }
//   });
// }
// $(document).ready(function() {
//   getQuote();
//   $('#new-quote').on('click', getQuote);
//   $('#tweet-quote').on('click', function() {
//     if(!inIframe()) {
//       openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//     }
//   });
//   $('#tumblr-quote').on('click', function() {
//     if(!inIframe()) {
//       openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
//     }
//   });
// });