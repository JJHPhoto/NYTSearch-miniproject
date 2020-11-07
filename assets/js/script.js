// Frontend JS

var userSearch = $("#exampleInputEmail1");

var searchTermInput = document.getElementById("searchTerm").value;
var startYearInput = document.getElementById("startYear").value;
var endYearInput = document.getElementById("endYear").value;

// Backend JS

$("button").on("click", function () {
  var person = $(this).attr("data-person");
  var person = $(this).data("person");
  // api_key = "6iLNzZCyGjznppIn1mkOPHxYjq1JWAiN"
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    userSearch +
    "&api-key=QPnDWCkH4gCMxcl0fKX87SduZk5tbKf9";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // var results = response.data;

    // for (var i = 0; i < results.length; i++) {
    //   var gifDiv = $("<div>");

    //   var rating = results[i].rating;

    //   var p = $("<p>").text("Rating: " + rating);

    //   var personImage = $("<img>");
    //   personImage.attr("src", results[i].images.fixed_height.url);

    //   gifDiv.prepend(p);
    //   gifDiv.prepend(personImage);

    //   $("#gifs-appear-here").prepend(gifDiv);
    // }
  });
});
