// $.ajax({
//     url: "http://localhost:8080/api?" + new URLSearchParams({"state":"TX"}),
//     type: 'GET',
//     dataType: 'json', // added data type
//     success: function(res) {
//         console.log((new URLSearchParams({"state":"TX"})).toString());
//         console.log(res);
//         alert(res);
//     }
// });

function stateSearch(StateName) {
    //var StateName = this.getAttribute('alt');
    $.ajax({
        url: "http://localhost:8080/api?" + new URLSearchParams({"state":StateName}),
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
    //Now to break up the res

}

function searchButton(TextInput) {

    $.ajax({
        url: "http://localhost:8080/api?" + new URLSearchParams({"q=":TextInput}),
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
    

}








