var mainContainer = $(".container");
var currentDay = $("#currentDay");

$(document).ready(function () {
  var currentDateString = moment().format("MMMM, Do YYYY");
  var currentDatetime = moment();

  //text needs to be generated from local storage
  for (i = 9; i < 18; i++) {
    var businessHour = moment().hour(i).format("hA");

    var timeRow = $("<div>").addClass("row saveText");
    var timeBlock = $("<p>").text(businessHour).addClass("col-sm-1 time-block");
    var textArea = $("<textarea>");
    var saveButton = $("<button>").addClass("col-sm-1 saveBtn").attr("data-time", businessHour);

    textArea.addClass("col-sm-10");

    var currentInput = JSON.parse(localStorage.getItem("todoList"));
    if (currentInput) {
      for (var t = 0; t < currentInput.length; t++) {
        var textTime = currentInput[t].time;
        console.log(currentInput[t].time);
        if (textTime === businessHour) {
          textArea.text(currentInput[t].todo);
        }
      }
    }

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
