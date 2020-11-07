// Frontend JS

var userSearch = $("#exampleInputEmail1");

var searchTermInput = document.getElementById("searchTerm").value;
var startYearInput = document.getElementById("startYear").value;
var endYearInput = document.getElementById("endYear").value;

// Backend JS
api_key = "6iLNzZCyGjznppIn1mkOPHxYjq1JWAiN";
url =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";
