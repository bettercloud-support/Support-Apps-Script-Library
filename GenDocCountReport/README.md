DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script returns the number of Google Docs that the user owns. 
The data is coming from the num_docs in the Reports API. Please note that this field will no longer be available in 2018.
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-docs


1) Create a new Google Sheet in Google Drive.
2) Go to Tools > Script Editor.
3) Paste the Apps Script.
4) Go to Resources > Advanced Google Services
5) Enable the Admin Reports API and the Admin SDK in the API console. http://screenshots.bettercloud.com/0l1E1v072C1W
6) Edit the variable 'daysBack' to the date you wish to report on. If set to 3, the report will get data from 3 days ago, if 4, 4 days ago and etc. 
Note that there is a delay imposed by Google for the Reports API. https://support.google.com/a/answer/7061566?hl=en
7) Run the script.
8) The number of Google Docs for each user should be populated in Column B. http://screenshots.bettercloud.com/463U3Z1D0k3X

NOTE: If you receive the 'Backend error' message upon running the script, this means that there is no Data available for this date. Please adjust the variable daysBack to as far back as necessary to retrieve data. http://screenshots.bettercloud.com/3o341m223C2R
