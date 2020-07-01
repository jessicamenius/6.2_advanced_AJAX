// getting document ready for jQuery
$(document).ready(function () {
  //   console.log("Hello world!");

  // defining the variable and leave it as an empty string
  var inputText = "";

  // creating an  event listener and binding it to click
  $(submitBtn).on("click", function (e) {
    // prevents browser from refreshing
    e.preventDefault();

    //taking value textInput input
    inputText = $(textInput).val();

    // clears text from input box
    $("#textInput").val("");

    // logs what is typed in box in the console
    console.log(inputText);
  });
});


$.ajax({
    type: "GET",
    url: "https://api.giphy.com/v1/gifs/trending?limit=5&api_key=${api_key}",
    dataType: "json",
  }).then(function (response) {
    console.log(response);