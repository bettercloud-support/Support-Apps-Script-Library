DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

SUMMARY: This script will add a Group alias to a Google Group that is specified in the Google Sheet column.

1) Create a Google Spreadsheet in Google Drive.
2) Input the Group emails you wish to add the alias to in Column A and the alias name in Column B. http://screenshots.bettercloud.com/172f0K2X0a3w
3) Go to Tools > Script Editor.
4) Remove any existing code and add the code here: http://screenshots.bettercloud.com/1F2d1U0z041S
5) Go to Resources > Advanced Google Services and then enabled the Admin Directory API. Enable the Admin SDK from the Google API console as well. http://screenshots.bettercloud.com/0r123C1z1608
6) Save & Run the script
7) Column C should populate with SUCCESS in the Group email row: http://screenshots.bettercloud.com/0l033W2p1P1s
