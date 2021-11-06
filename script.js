function searchResults(Name) {

}

function searchButton() {
    Result = httpGet('https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica')
    document.getElementById('resultsInformation').innerHTML = Result;

}

var url = "https://projects.propublica.org/nonprofits/api/v2/search.json?state%5Bid%5D=TX";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
