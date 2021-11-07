// function searchResults(Name) {

// }

function searchButton() {
    //Result = httpGet('https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica')
    // document.getElementById('resultsInformation').innerHTML = Result;

}


// (function() {
//     var httpRequest;
//     document.getElementById("searchButton").addEventListener('click', makeRequest);
  
//     function makeRequest() {
//       httpRequest = new XMLHttpRequest();
  
//       if (!httpRequest) {
//         alert('Giving up :( Cannot create an XMLHTTP instance');
//         return false;
//       }
//       httpRequest.onreadystatechange = alertContents;
//       httpRequest.open('GET', 'https://projects.propublica.org/nonprofits/api/v2/search.json?state%5Bid%5D=TX');
//       httpRequest.send();
//     }
  
//     function alertContents() {
//       if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//           alert(httpRequest.responseText);
//         } else {
//           alert('There was a problem with the request.');
//         }
//       }
//     }
//   })();

//https://projects.propublica.org/nonprofits/api/v2/search.json?state%5Bid%5D=TX



// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, true ); 
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }


$.ajax({
    "headers": {
        "Access-Control-Allow-Origin":"*"
    },
    url: "https://projects.propublica.org/nonprofits/api/v2/search.json?state%5Bid%5D=TX",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        console.log(res);
        alert(res);
    }
});























