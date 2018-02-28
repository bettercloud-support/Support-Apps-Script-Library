DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script bulk updates the EmployeeID field for a user. Employee ID is shown in a user's G Suite profile under Basic Information > Additional Info > Next. http://screenshots.bettercloud.com/110H2r0a1D01

1) Open a new Google Sheet in Drive.
2) Add the User Emails in Cell A2 and below. Add the desired EmployeeID in Cell B2 and below. http://screenshots.bettercloud.com/2t0j0T2b2o28
3) Go to Tools > Script Editor in the sheet to open the Script Editor.
4) Paste the Apps Script into the Script Editor.
5) Go to Resources > Advanced Google services in the Script Editor and enable the Admin Directory API.
6) Enable the Admin SDK from the API Console as well. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
7) Run the script, Column C should populate with Success/Failure http://screenshots.bettercloud.com/3r440r2R0z2B

