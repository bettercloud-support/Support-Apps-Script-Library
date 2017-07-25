DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

Summary: This script takes a Google Group name and adds an alias to it under a different specified domain.


1) In Google Drive, open up a new Google Sheet.
2) Go to Tools > Script Editor
3) In the script editor, paste the Apps Script.
4) Go to Resources > Advanced Google Sercices and enable the Admin Directory API. 
5) Enable the Admin SDK in the API console as well. Enable the Admin SDK in the API console as well. http://screenshots.bettercloud.com/0r123C1z1608
6) Change the variable gAlias to the desired alias for your groups.
http://screenshots.bettercloud.com/1J0t3o1t0l1c
7) Add the Group name in Column A of the spreadsheet that you wish to add the alias to. http://screenshots.bettercloud.com/1E1Q2V0F2g3T
8) Run the script with the Play button and accept permissions. You'll get a SUCCESS or PASS message in Column B.
9) Column C will populate with the new alias if successful. http://screenshots.bettercloud.com/3y2N3C3w0R0a

