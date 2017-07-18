DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script gets a last login report for users on G Suite domain using the Google Reports API. 
Info on the fields used in the script can be seen here: https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-accounts

1) Open a new Google Sheet in Drive.
2) Go to Tools > Script Editor in the spreadsheet.
3) Copy the Apps Script attached and paste it into the Script Editor.
4) In the script, edit the variable 'daysBack' to the date you wish to report on. If set to 3 the report will get data from 3 days ago, if 4, 4 days ago and etc. 
Note that there is a 1-3 day delay imposed by Google for the Reports API listed under 'Aggregate Reports > Accounts'. https://support.google.com/a/answer/7061566?hl=en
5) Screenshot of the 'daysBack' variable: http://screenshots.bettercloud.com/000m2z1H3u2M
6) Go to Resources > Advanced Google Services in the Script Editor.
7) Toggle 'Admin Reports API' to ON: http://screencast.com/t/GH1mtvqEz
8) Click 'Google Developers Console': http://screencast.com/t/PfIUWvNmWP
9) Search for 'Admin SDK' and click into it: http://screencast.com/t/IBh14adViSR8
10) Back in the Apps Script, hit 'OK'.
11) Select 'generateUserUsageReport' and click 'Run': http://screencast.com/t/EQ6dv0wg0
12) Accept permissions.
13) The report will then be generated inside the spreadsheet.
http://screenshots.bettercloud.com/2f0r0Q3m1T2M

NOTE: If you receive an error saying that "Data for dates later than X are unavailable", please increase the daysBack variable to report a date prior than what the error message shows. http://screenshots.bettercloud.com/3O2821472009
