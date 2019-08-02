DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script will show the last Google Calendar event on a Calendar Resource via a Google Sheet.

1) Open a new Google Sheet in Google Drive.
2) Go to Tools > Script Editor.
3) Paste the attached Apps Script into the Script Editor.
4) Go to Resources > Advanced Google Services and enable the Google Calendar API. http://screenshots.bettercloud.com/bc60b7bf8da2
5) Add the Resource email to the script in the resource variable in row 2 of the script. http://screenshots.bettercloud.com/56ba71ee8c35
6) You can get the Resource email through BetterCloud by going to Google Apps > Calendar > Audit and then the 'Resource' tab. The email will show under the 'Details' tab when you click on the Resource. http://screenshots.bettercloud.com/3K3X3r3V1Y1q
You can also get the Resource email from Google Calendar under Calendar Settings: http://screenshots.bettercloud.com/2N1k3Q1B2g3P
7) In the actualDate variable inrow 4, change the desired timeframe of the events you wish to delete. Currently the script is set to 3 months. http://screenshots.bettercloud.com/e1d3d6c5383f
8) Select the deleteEventsResource' function and press the Play button to run the script. Accept the Google API permissions.
