DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script lists the members and the nested groups of a given Google Group, recursively. 
*Note*: The max results for this script has been lowered to 200 because of a change in the G Suite Directory - this script may not report all users if the member count exceeds 200.

Instructions:

1. Create a new Google Sheet in Google Drive.
2. Go to Tools > Script editor in the sheet.
3. Remove any existing code and paste the Apps Script attached into the Script Editor.
4. In the Group Key field, please enter your target group in place of 'classic-men@dundermifflin.net' 
http://screenshots.bettercloud.com/3A3S2m2h013A
5. In the 'domain' field, please enter your own domain in place of 'dundermifflin.net' http://screenshots.bettercloud.com/360p1h3O1Q05
6. Go to Resources > Advanced Google Services. Enable the Admin Directory API. http://screenshots.bettercloud.com/150M0X0o1N3u
7. Click "Google Developers Console" in the yellow box
8. Search for Admin SDK and enable as well. http://screenshots.bettercloud.com/0S1D3T0k3M2U
9. Back in the Apps Script, press OK.
11. Select the 'MainGetUserList' function. Press the play button. http://screenshots.bettercloud.com/140E3E1z3R2w
12. Accept permissions.
13. Script will finish running the yellow message disappears.
13. The spreadsheet will be populated with the Report. 
Gif of execution: http://screenshots.bettercloud.com/3n0R3c1n3m0P
Results: http://screenshots.bettercloud.com/3P3i2E0n3u3Q
