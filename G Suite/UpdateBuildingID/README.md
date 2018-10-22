DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script bulk updates the BuildingID for a User. BuildingID is a field shown in the Admin Console and the 'locations' array in the Directory API.

1) Open a new Google Sheet in Drive.
2) Add the User Emails in Cell A2 and below. Add the desired BuildingID in Cell B2 and below. http://screenshots.bettercloud.com/3ae555690441
3) Go to Tools > Script Editor in the sheet to open the Script Editor.
4) Paste the Apps Script into the Script Editor.
5) Go to Resources > Advanced Google services in the Script Editor and enable the Admin Directory API.
6) Enable the Admin SDK from the API Console as well. http://screenshots.bettercloud.com/a05ac29b7a89
7) Run the script, Column C should populate with Success/Failure. http://screenshots.bettercloud.com/42c22debd24d
