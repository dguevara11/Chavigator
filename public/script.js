// $.ajax({
//     url: "http://localhost:8080/api?" + new URLSearchParams({"state":"TX"}),
//     type: 'GET',
//     dataType: 'json', // added data type
//     success: function(res) {
//         console.log((new URLSearchParams({"state":"TX"}).toString()));
//         console.log(res);
//         alert(res);
//     }
// });

function stateSearch(StateName) {
    document.getElementById("mapPicture").hidden =true;
    $.ajax({
        url: "http://localhost:8080/api?" + new URLSearchParams("state[id]=TX"),
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            console.log(res);
            let organizationsList = res.organizations
            let fullList = ""
            for (let i = 0; i < organizationsList.length; i++) {
                fullList += organizationsList[i].name + " </br></br>"
            }
            fullListfinal = fullList.replace(/[0-9]/g, '')

            document.getElementById('resultsInformation').innerHTML = fullListfinal
        }
    });
}

function searchButton() {
    TextInput = document.getElementById("searchBar").innerHTML;
    $.ajax({
        url: "http://localhost:8080/api?" + new URLSearchParams({ "q": TextInput }),
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            console.log(res);
            let organizationsList = res.organizations
            let fullList = ""
            for (let i = 0; i < organizationsList.length; i++) {
                fullList += organizationsList[i].name + " </br></br>"
                
            }
            fullListfinal = fullList.replace(/[0-9]/g, '')
            document.getElementById('resultsInformation').innerHTML = fullListfinal;
        }
    });
}

function changeMap(mapName){
  document.getElementById("mainMap").src = "/assets/" + mapName+".png"
}





function showDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }






