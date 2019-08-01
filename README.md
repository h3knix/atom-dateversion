# dateversion package

Creates a date version string useful for cache busting or versioning something based on date.

It uses the format YYYYMMDD for the date portion, then it appends an integer between 00 and 99 to indicate minor/sub versions on the same date. Final "dateversion" will look like YYYYMMDD01.

If you select a current dateversion string and use the command or context menu, it will calculate if the current date matches the date version string and then it will increment the minor/sub version integer if it is less than 99. If the date doesn't match today's date, it will update the dateversion to use todays date with "01" as the minor/sub version.

![screenshot](https://raw.githubusercontent.com/h3knix/atom-dateversion/master/screenshot.jpg)
