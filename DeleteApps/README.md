***READ MEs***

DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. Bettercloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: THis script revokes access to third party apps based, based on the email address given in the spreadsheet.

1) Please create a new Google Sheet

2) Enter the group email addresses you’d like to revoke access to Apps to in Column A. Enter your Domain in column B.
http://screenshots.bettercloud.com/2o1Q0T0H3o3q

3) Go to Tools > Script Editor in the sheet

4) Paste the Apps Script provided below

5) Go to Resources > Advanced Google Services

6) Enable the Admin Directory API

7) Click "Google Developers Console" in the yellow box

8) Search for Admin SDK and enable

9) Back in the Apps Script press OK

10) Then, press the play button

11) Accept permissions

12) The script will finish running when this message disappears: http://screencast.com/t/IwyVBIsZG8

13) Check the sheet for a SUCCESS of FAILURE in column C
