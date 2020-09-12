# Work Day Scheduler

I was tasked with creating a work scheduling website. The website allows text input in time blocks for standard business hours and tracks the date and time. Time blocks that are past are colored gray, present time blocks colored red, and future time blocks colored green. 

To track the time I used the third party api moment.js. This api allowed me to retireve the current date and time and display it in string format. For a simplified code I iterated from 9 to 17 to not only create the html text blocks but to display the string formatted time (business hours from 9AM to 5PM):

```
  for (i = 9; i < 18; i++) {
    var businessHour = moment().hour(i).format("hA");

    var timeRow = $("<div>");
    ...
```

With the same index I was also able to compare the value of the time blocks with the current time:

```
    if (moment().hour() > i) {
      textArea.addClass("past");
    } else if (moment().hour() < i) {
      textArea.addClass("future");
    } else {
      textArea.addClass("present");
    }
```

## Usage
[Work Day Scheduler](https://dgtlctzn.github.io/work-day-scheduler/)

## Credits
Special thanks to moment.js for use of the third party api, Pngfuel for the lock image, and GA Tech Bootcamp for providing the necessary materials and information.

## License
MIT License

Copyright (c) 2020 Joseph Perry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

