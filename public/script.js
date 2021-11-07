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
        url: "http://localhost:8080/api?" + new URLSearchParams({ "state": StateName }),
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            console.log(res);
            let organizationsList = res.organizations
            let fullList = ""
            for (let i = 0; i < organizationsList.length; i++) {
                fullList += organizationsList[i].name + " </br>"
            }
            document.getElementById('resultsInformation').innerHTML = fullList
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
                fullList += organizationsList[i].name + " </br>"
            }
            document.getElementById('resultsInformation').innerHTML = fullList
        }
    });


}








