var mainContainer = $(".container");
var currentDay = $("#currentDay");

var currentDateString = moment().format("MMMM, Do YYYY");
var currentDatetime = moment();
console.log(currentDatetime.hour());

for (i = 0; i < 9; i++) {
    var businessHour = moment().hour(i + 9).format("hA")

    var timeRow = $("<div>");

    var timeBlock = $("<p>");
    var textArea = $("<textarea>");
    var saveButton = $("<button>");

    timeRow.addClass("row");
    timeBlock.addClass("col-sm-1 time-block");
    timeBlock.text(businessHour);
    textArea.addClass("col-sm-10 past");
    saveButton.addClass("col-sm-1 saveBtn");

    // if (currentDatetime.hour() > i) 

    timeRow.append(timeBlock, textArea, saveButton);
    mainContainer.append(timeRow);
}

currentDay.text(currentDateString);
