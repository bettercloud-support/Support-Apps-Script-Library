DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script retrieves all G Suite/VFE Licenses for a given domain. https://developers.google.com/admin-sdk/licensing/v1/how-tos/products

1) Create a new spreadsheet
4) In the menu bar, go to Tools > Script editor
5) Paste the Apps Script into the Script Editor
6) Go to Resources > Advanced Google services
7) Enable Enterprise License Manager API
8) Click Google Developers Console in yellow box
9) Search for License Manager API and enable. http://screenshots.bettercloud.com/1Z0w0S29303a
11) For existing G Suite Licenses, run the 'listGALicenseAssignments' function. http://screenshots.bettercloud.com/230q0l0n3R13
12) For existing Google Vault Licenses, run the 'listVFELicenseAssignments' function.
13) Accept permissions.
14) The spreadsheet will populate columns A and B with the user emails and the license associated with them respectively.
http://screenshots.bettercloud.com/0P310Q2C1B3h
