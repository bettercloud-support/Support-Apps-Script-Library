DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This is taking every group that contains "a chosen string in their username and changes their domain to a given domain. (e.g., changing a group with the string "corp" that is on @gameofclouds.com and changes the domain to @b.gameofclouds.com)

1) Open a new spreadsheet in Google Drive
2) Go to Tools > Script Editor
3) Paste the Apps Script into the Script Editor.
4) Edit the domain string to your chosen domain.
5) Change (string.indexOf("distro0"), to your desried group keyword. Change the domain and the desired subdomains to your own as well.
6) Go to Resources > Advanced Google Services and enable the Admin Directory API. Enable the Admin SDK from the API console.
7) Run the script, click on View > Logs to see the results
8) Click on View > Logs to see the groups that were changed. http://screenshots.bettercloud.com/340T1D0d1U17
