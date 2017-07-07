DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

SUMMARY: This script returns Google Groups that have Group aliases in a Google Sheet. This script can take multiple domains as input in Sheet 2, and then returns the groups & respective aliases in Sheet 1.

1) Create a new Google Sheet in Drive.
2) Create a new sheet and leave it named Sheet 2.
3) List all domains in Column A (In Sheet 2): http://screenshots.bettercloud.com/442e0l1Y0T23
4) Please go to Tools > Script editor.
5) Paste the Apps Script: http://screenshots.bettercloud.com/252n1u1w0v40
6) Go to Resources > Advanced Google Services.
7) Enable the Admin Directory API.
8) Click "Google Developers Console" in the yellow box.
9) Search for Admin SDK and enable. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
10) Back in Apps Script press OK.
11) Press the play button.
12) Accept permissions.
13) Script will finish running when this message disappears: http://screenshots.bettercloud.com/2W0X0I0m3X2Z
14) Results will show in Sheet 1 (Group email in Column A, Alias in Column B): http://screenshots.bettercloud.com/1L3x13021N06
