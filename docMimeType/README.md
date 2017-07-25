DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script populates a Google Sheet column with the 'mimetype' of a doc: https://developers.google.com/drive/v3/web/mime-types

1) First, please go into BetterCloud to get the Drive Audit Export. In BetterCloud go to Google Apps > Drive > Audit and then hit 'Export to a spreadsheet' once you've filter for your desired documents. http://screenshots.bettercloud.com/422B3V0K1U3x
2) In the spreadsheet that you exported from Drive Audit, add a new column all the way to the right (Column V). http://screenshots.bettercloud.com/3n222x0D1U03
3) On the menu bar, select Tools > Script Editor. http://screenshots.bettercloud.com/0x2v410n032N
4) Copy and paste the Apps Script into the Script Editor.
5) On the menu bar, select Resources > Advanced Google Services.
6) Toggle 'Drive API' on: http://screenshots.bettercloud.com/0Y1t1f0Y0414
7) Click "Google API Console".
8) Search for "Google Drive API" and enable: http://screenshots.bettercloud.com/3X1O2U2h2c24
9) Back in the Apps Script, click "OK".
10) Press the Play button: http://screenshots.bettercloud.com/3g2M380Y450p
11) Accept permissions.
12) Once this message disappears, then the script will be finished: http://screenshots.bettercloud.com/1x3z1o2Z0P2r
13) Results: http://screenshots.bettercloud.com/2S3j01211j0z
