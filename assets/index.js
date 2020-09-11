var mainContainer = $(".container");
var currentDay = $("#currentDay");

$(document).ready(function () {
  var currentDateString = moment().format("MMMM, Do YYYY");
  var currentDatetime = moment();
  console.log(currentDatetime.hour());

  for (i = 9; i < 18; i++) {
    var businessHour = moment().hour(i).format("hA");

    var timeRow = $("<div>");

    var timeBlock = $("<p>");
    var textArea = $("<textarea>");
    var saveButton = $("<button>");

    timeRow.addClass("row saveText");
    // timeRow.attr("data-choice", i)
    timeBlock.addClass("col-sm-1 time-block");
    timeBlock.text(businessHour);
    textArea.addClass("col-sm-10");
    saveButton.addClass("col-sm-1 saveBtn");
    saveButton.attr("data-choice", i)

    if (currentDatetime.hour() > i) {
      textArea.addClass("past");
    } else if (currentDatetime.hour() < i) {
      textArea.addClass("future");
    } else {
      textArea.addClass("present");
    }

    timeRow.append(timeBlock, textArea, saveButton);
    mainContainer.append(timeRow);
  }

  currentDay.text(currentDateString);


  //create listener that listens to buttons
  //store text to local storage when pressed
  $(".saveBtn").on("click", function() {
    var textInput = $(this).prev().val();
    var boxSelected = $(this).attr("data-choice");
    var storedInput = JSON.parse(localStorage.getItem("todoList"));

    var inputObject = {
        todo: textInput,
        boxNumber: boxSelected,
    }

    if (storedInput) {
        storedInput.push(inputObject);
    } else {
        storedInput = [];
        storedInput.push(inputObject);
    }

    localStorage.setItem("todoList", JSON.stringify(storedInput));

  })
});
