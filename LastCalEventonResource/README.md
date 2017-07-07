DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script will show the last Google Calendar event on a Calendar Resource via a Google Sheet.

1) Open a new Google Sheet in Google Drive.
2) Go to Tools > Script Editor.
3) Paste the attached Apps Script into the Script Editor.
4) Go to Resources > Advanced Google Services and enable the Google Calendar API. Enable the Calendar API from the API console as well. http://screenshots.bettercloud.com/392B0w3R3K2Y
5) Back in the spreadsheet, add the Calendar Resource emails to Column A. Like so: http://screenshots.bettercloud.com/3K2l0A122V2R
6) You can get the Resource email through BetterCloud by going to Google Apps > Calendar > Audit and then the 'Resource' tab. The email will show under the 'Details' tab when you click on the Resource. http://screenshots.bettercloud.com/3K3X3r3V1Y1q
6) Run the script, Column B and C should populate with the last event for each Resource listed. http://screenshots.bettercloud.com/292A3H2n1U1q
