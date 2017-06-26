DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. Bettercloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

Summary: This script shows calendar events for the calendar IDs listed in column A and a specified event creator

1) Open a new spreadsheet in Drive
2) Go to Tools > Script Editor
3) Paste the appscript.
4) Go to Resources > Advanced Google Services and enable the Calendar API. Enable from the API console as well. http://screenshots.bettercloud.com/302j2s3U3v07
4.5) API Console: http://screenshots.bettercloud.com/0S2U1t3W1823
5) In the spreadsheet, enter the calendar resources you wish to examine in column A
6) In the script, enter the creator of the events' email in the 'creator' string
7) Run the script, go to View > Logs to see the events when the script is finished
8) Spreadsheet will populate with the latest events: http://screenshots.bettercloud.com/0o3v2N1K3629
