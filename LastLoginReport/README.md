DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: Gets a last login report for users on G Suite domain.

1) Open a new Google Sheet in Drive.
2) Go to Tools > Script Editor in the spreadsheet.
3) Copy the Apps Script attached and paste it in the Script Editor.
4) In the script, edit the variable 'daysBack' to the date you wish to report on. If set to 3 the report will get data from 3 days ago, if 4, 4 days ago and etc. 
Note that there is a delay imposed by google for the Reports API. https://support.google.com/a/answer/7061566?hl=en
4) Go to Resources > Advanced Google Services in the Script Editor.
5) Toggle 'Admin Reports API' to ON: http://screencast.com/t/GH1mtvqEz
6) Click 'Google Developers Console': http://screencast.com/t/PfIUWvNmWP
7) Search for 'Admin SDK' and click into it: http://screencast.com/t/IBh14adViSR8
8) Back in the Apps Script, hit 'OK'.
9) Select 'generateUserUsageReport' and click 'Run': http://screencast.com/t/EQ6dv0wg0
10) Accept permissions.
11) The report will then be generated inside the spreadsheet.
http://screenshots.bettercloud.com/2f0r0Q3m1T2M
