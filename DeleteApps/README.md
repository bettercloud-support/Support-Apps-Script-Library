***READ MEs***

DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script revokes access to third party apps using G Suite data, based on the email address and ClientID(AppID) given in a Google Sheet.

1) Please create a new Google Sheet in Drive.
2) Enter the user's email addresses you’d like to revoke access to Apps to in Column A. Enter the Client ID of the app in Column B.
3) You can retrieve the ClientID of all applications from BetterCloud's Apps Audit using the 'App ID' field. Please go to Apps > Audit in BetterCloud and hit 'Export to a spreadsheet' for your chosen app(s). http://screenshots.bettercloud.com/2n3B3F02150x
4) You will then get a spreadsheet of your chosen app information in Google Drive. Copy & Paste the 'AppID' of your chosen app from the App Export into column B of the script spreadsheet. http://screenshots.bettercloud.com/3s1m071n1m0a
3) Once you have the user's email and clientID in the Google Sheet, go to Tools > Script Editor.
4) Paste the Apps Script provided into the Script Editor.
5) Go to Resources > Advanced Google Services.
6) Enable the Admin Directory API.
7) Click "Google Developers Console" in the yellow box.
8) Search for Admin SDK and enable. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
9) Back in the Apps Script, press OK.
10) Then, press the play button.
11) Accept permissions.
12) The script will finish running when this message disappears: http://screencast.com/t/IwyVBIsZG8
13) Check the spreadsheet for a SUCCESS or FAILURE in Column C.
14) The Admin Audit Report in admin.google.com will show a OAuth Token Revoke for the specified AppID. http://screenshots.bettercloud.com/132K2v1s452K
