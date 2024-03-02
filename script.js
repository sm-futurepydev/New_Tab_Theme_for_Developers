document.getElementById("search").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    googleSearch();
  }
});

function googleSearch() {
  var text = document.getElementById("search").value;
  var cleanQuery = text.replace(/\s+/g, "+"); // Fix the regex for replacing spaces globally
  var url = 'http://www.google.com/search?q=' + cleanQuery;

  window.location.href = url;
}