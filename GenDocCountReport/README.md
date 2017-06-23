DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. Bettercloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script returns the number of docs that the user owns .
1) Create a new spreadsheet in Google Drive
2) Go to Tools > Script Editor 
3) Paste the appscript
4) Go to Resources > Advanced Google Services
5) Enable the Admin Reports API and the Admin SDK in the API console
6) Edit the minus 3 in "d.setDate(d.getDate() - 3)" to the date you wish to report on. Minus 3 is 3 days ago. Minus 4 is 4 days..
Note that the there is a delay imposed by google for the Reports API. https://support.google.com/a/answer/7061566?hl=en
7) Run the script.
