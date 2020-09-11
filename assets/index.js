var mainContainer = $(".container");
var currentDay = $("#currentDay");

$(document).ready(function () {
  var currentDateString = moment().format("MMMM, Do YYYY");
  var currentDatetime = moment();

  //text needs to be generated from local storage
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
    saveButton.attr("data-time", businessHour);

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

  //buttons save updated values in seperate objects
  function addToStorage(input, number) {
    var storedInput = JSON.parse(localStorage.getItem("todoList"));

    var inputObject = {
      todo: input,
      time: number,
    };

    // for (var i = 0; i < storedInput.length; i++) {
    //   if (storedInput[i].time === number) {
    //     storedInput.splice(storedInput[i], i)
    //   }
    // }
    if (storedInput) {
      for (var i = 0; i < storedInput.length; i++) {
        if (storedInput[i].time === number) {
          var currentIndex = storedInput.indexOf(storedInput[i]);
          storedInput.splice(currentIndex, 1);
        }
      }
      storedInput.push(inputObject);
    } else {
      storedInput = [];
      storedInput.push(inputObject);
    }

    localStorage.setItem("todoList", JSON.stringify(storedInput));
  }

  $(".saveBtn").on("click", function () {
    var textInput = $(this).prev().val();
    var boxSelected = $(this).attr("data-time");

    addToStorage(textInput, boxSelected);
  });
});
