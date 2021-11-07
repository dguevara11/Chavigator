$.ajax({
    url: "http://localhost:8080/api?" + new URLSearchParams({"state":"TX"}),
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        console.log(res);
        alert(res);
    }
});

// function stateSearch(StateName) {
//     $.ajax({
//         url: "http://localhost:8080/api?" + new URLSearchParams({"state":StateName}),
//         type: 'GET',
//         dataType: 'json', // added data type
//         success: function(res) {
//             console.log(res);
//             alert(res);
//         }
//     });
// }

// function searchButton(TextInput) {

//     $.ajax({
//         url: "http://localhost:8080/api?" + new URLSearchParams({"q=":TextInput}),
//         type: 'GET',
//         dataType: 'json', // added data type
//         success: function(res) {
//             console.log(res);
//             alert(res);
//         }
//     });
    

// }








