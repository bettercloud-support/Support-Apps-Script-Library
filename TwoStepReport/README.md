DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script generates a report of the Two Step Enrolled and Two Step Enforced value for all domain users. These values come from Google's Reports API. https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-accounts

1) In Google Drive, open a new Google Sheet.
2) Go to Tools > Script Editor in the spreadsheet.
3) Copy the Apps Script attached and paste it in the Script Editor.
4) In the script, edit the variable 'daysBack' to the date you wish to report on. If set to 3 the report will get data from 3 days ago, if 4, 4 days ago and etc. Screenshot of the 'daysBack' variable: http://screenshots.bettercloud.com/000m2z1H3u2M
5) Note that there is a 1-3 day delay imposed by Google for the Reports API under Aggregate Reports > Accounts. https://support.google.com/a/answer/7061566?hl=en
6) Go to Resources > Advanced Google Services in the Script Editor.
7) Toggle 'Admin Reports API' to ON: http://screencast.com/t/GH1mtvqEz
8) Click 'Google Developers Console': http://screencast.com/t/PfIUWvNmWP
9) Search for 'Admin SDK' and click into it: http://screencast.com/t/IBh14adViSR8
10) Back in the Apps Script hit, 'OK'.
11) Select 'generateUserUsageReport' and click 'Run': http://screencast.com/t/EQ6dv0wg0
12) Accept permissions.
13) The spreadsheet will then be populated with the generated report.
http://screenshots.bettercloud.com/1D3i160Y0V3W

NOTE: If you receive an error saying that "Data for dates later than X are unavailable", please increase the daysBack variable to report a date prior than what the error message shows. http://screenshots.bettercloud.com/3O2821472009
