DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

1. Create a new Google Sheet in Google Drive.
2. Go to Tools > Script editor in the sheet.
3. Remove any existing code and paste the Apps Script attached into the Script Editor.
4. Go to Resources > Advanced Google Services. Enable the Admin Directory API
5. Click "Google API" in the yellow box.
6. Search for Admin SDK and enable as well. http://screenshots.bettercloud.com/2Y2a3V2u3r13
7. Back in the Apps Script, press OK.
8. In the script, change the domains under aliasDomains to the domains you want to pull from: http://screenshots.bettercloud.com/2W0r0T1U2403. You may enter as many domains as you want here, but please ensure that they are all inside the square brackets, surrounded by single quotation marks, and separated by commas. As in ['cloudsandrec.com', 'alias.cloudsandrec.com']
9. Press the play button.
10. Accept permissions.
11. The script will finish running the yellow message disappears.
12. The Google Sheet will then be populated with the Full Name, Primary Email and all relevant aliases for users with aliases on the domains you've specified: http://screenshots.bettercloud.com/0c1V3w3P3p2a
