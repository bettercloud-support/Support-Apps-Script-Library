***READ MEs***

DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script revokes access to third party apps using G Suite data, based on the email address and ClientID(AppID) given in a Google Sheet.

1) Please create a new Google Sheet in Drive.
2) Enter the user's email addresses you’d like to revoke access to Apps to in Column A. Enter the Client ID of the app in Column B.
3) You can retrieve the ClientID of all applications from BetterCloud's Apps Audit using the 'App ID' field. Please go to Apps > Audit in BetterCloud and hit 'Export to a spreadsheet' for your chosen app(s). http://screenshots.bettercloud.com/2n3B3F02150x
4) You will then get a spreadsheet of your chosen app information in Google Drive. Copy & Paste the 'AppID' of your chosen app from the App Export into column B of the script spreadsheet. http://screenshots.bettercloud.com/3s1m071n1m0a
5) You can also get the clientID for certain apps through this Google API call. It will list all Apps installed and tied to the specified G Suite Account. https://developers.google.com/admin-sdk/directory/v1/reference/tokens/list
Screenshot: http://screenshots.bettercloud.com/1g1s1z3o0X3S
6) Once you have the user's email and clientID in the Google Sheet, go to Tools > Script Editor.
7) Paste the Apps Script provided into the Script Editor.
8) Go to Resources > Advanced Google Services.
9) Enable the Admin Directory API.
10) Click "Google Developers Console" in the yellow box.
11) Search for Admin SDK and enable. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
12) Back in the Apps Script, press OK.
13) Then, press the play button.
14) Accept permissions.
15) The script will finish running when this message disappears: http://screencast.com/t/IwyVBIsZG8
16) Check the spreadsheet for a SUCCESS or FAILURE in Column C.
17) The Admin Audit Report in admin.google.com will show a OAuth Token Revoke for the specified AppID. http://screenshots.bettercloud.com/132K2v1s452K
