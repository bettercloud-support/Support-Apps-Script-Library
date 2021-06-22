READ MEs

DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script adds an owner to a Google Group. The Group owner and the Group are specified by their respective email addresses in a Google Sheet.

Please create a new Google Sheet in Drive.
Enter the Group email addresses you’d like to like add the owner to in Column A, and the user's email address in Column B. http://screenshots.bettercloud.com/1W2v3O3R1s0b
Go to Tools > Script Editor in the sheet.
Remove any existing code and paste the Apps Script attached into the Script Editor.
Go to Services and enable the 'Admin Directory API' https://screenshots.bettercloud.com/9ZudQZpl
Click the run button and accept permission when prompted.
The script will finish running when the execution log says completed. https://screenshots.bettercloud.com/YEuZOxvY
