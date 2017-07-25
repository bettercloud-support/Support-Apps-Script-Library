DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script returns the number of Google Docs that the user owns. 
The data is coming from the num_docs field in the Reports API. Please note that this field will no longer be available in 2018.
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-docs


1) Create a new Google Sheet in Google Drive.
2) Add the User Emails that you wish to report on in Column A of the sheet. http://screenshots.bettercloud.com/1i2x2y1k1a1c
3) Go to Tools > Script Editor.
4) Paste the Apps Script attached into the Script Editor.
5) Go to Resources > Advanced Google Services
6) Enable the Admin Reports API and the Admin SDK in the API console. http://screenshots.bettercloud.com/0l1E1v072C1W
7) In the Script Editor, edit the variable 'daysBack' to the date you wish to report on. If set to 3, the report will get data from 3 days ago, if 4, 4 days ago and etc. 
8) Note that there is a 2-6 day delay imposed by Google for the Reports API under 'Drive Report'. https://support.google.com/a/answer/7061566?hl=en
9) Run the script.
10) The number of Google Docs for each user should be populated in Column B. http://screenshots.bettercloud.com/463U3Z1D0k3X

NOTE: If you receive the 'Backend error' message upon running the script, this means that there is no Data available for this date. Please adjust the variable daysBack to as far back as necessary to retrieve data. http://screenshots.bettercloud.com/3o341m223C2R
