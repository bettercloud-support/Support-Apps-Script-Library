DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.


SUMMARY: This script undeletes G Suite users that were deleted within 5 days, and places them in the Root OU. https://developers.google.com/admin-sdk/directory/v1/reference/users/undelete

1) Open up a Google Sheet in Google Drive, and then click on Tools > Script Editor
2) In the Script Editor, please add the name of the Org Unit that the restored users will be placed. http://screenshots.bettercloud.com/2G1J3m2v1K1f
2) Go to Resources > Advanced Google Services and Enable the Admin Directory API. Enable the Admin SDK from the API console as well. http://screenshots.bettercloud.com/182X3F1q3s14
3) Run the script, the restored users should be populated in the spreadsheet. Column A shows the time of restoration, Column B shows their uniqueID, and Column C shows their primary email. http://screenshots.bettercloud.com/1b0K2y043k0L
