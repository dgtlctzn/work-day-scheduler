var mainContainer = $(".container")

for (i = 0; i < 9; i++) {
    var timeRow = $("<div>");

    var timeBlock = $("<p>");
    var textArea = $("<textarea>");
    var saveButton = $("<button>");

    timeRow.addClass("row");
    timeBlock.addClass("col-sm-1 time-block");
    textArea.addClass("col-sm-10 past");
    saveButton.addClass("col-sm-1 saveBtn");

    timeRow.append(timeBlock, textArea, saveButton);
    mainContainer.append(timeRow);
}