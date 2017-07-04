DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

Summary: This script shows Google Calendar events for the Calendar IDs listed in Column A and a specified event creator.

1) Open a new Google Sheet in Drive.
2) Go to Tools > Script Editor.
3) Paste the Apps Script into the Script Editor.
4) Go to Resources > Advanced Google Services and enable the Calendar API. http://screenshots.bettercloud.com/302j2s3U3v07
5) Enable from API Console as well: http://screenshots.bettercloud.com/0S2U1t3W1823
6) In the sheet, enter the Calendar Resources you wish to examine in Column A.
7) In the script, enter the creator of the Events' email in the 'creator' string.
8) Run the script, go to View > Logs to see the events when the script is finished.
9) The Google Sheet will populate with the latest events: http://screenshots.bettercloud.com/0o3v2N1K3629
