DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script retrieves all G Suite/VFE Licenses for a given domain and populates a Google Sheet with that info. https://developers.google.com/admin-sdk/licensing/v1/how-tos/products

1) Create a new Google Sheet in Drive.
2) In the menu bar, go to Tools > Script editor.
3) Paste the Apps Script attached into the Script Editor.
4) In the script code, please edit the "domain" string to your own domain. http://screenshots.bettercloud.com/3J3X151m3m2U
5) Go to Resources > Advanced Google services.
6) Enable the Enterprise License Manager API.
7) Click Google Developers Console in yellow box.
8) Search for License Manager API and enable. http://screenshots.bettercloud.com/1Z0w0S29303a
9) For existing G Suite Licenses, run the 'listGALicenseAssignments' function. http://screenshots.bettercloud.com/230q0l0n3R13
10) For existing Google Vault Licenses, run the 'listVFELicenseAssignments' function.
11) Accept permissions.
12) The spreadsheet will then populate Columns A and B with the user emails and the license associated with them respectively.
http://screenshots.bettercloud.com/0P310Q2C1B3h
