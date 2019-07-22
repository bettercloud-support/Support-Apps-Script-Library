DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script generates a report of the Two Step Enrolled and Two Step Enforced value for all domain users. These values come from Google's Directory API.

1) In Google Drive, create a new Sheet
2) In your new Sheet, go to Tools > Script Editor
3) Copy the script code below and paste into the Script Editor
4) Go to Resources > Advanced Google Services in the Script Editor
5) Toggle "Admin Directory API" to ON: http://screenshots.bettercloud.com/1F2n1h3H273P
6) Click "Google API Console" http://screenshots.bettercloud.com/0r0q040t2C3Q
7) Search for and Enable "Admin SDK:" http://screenshots.bettercloud.com/2L0J2P2i1J11
8) Back in the Apps Script, click OK 9/ Click "Run > "twosv_report" and accept permissions when prompted The sheet will be populated with a report of your users' 2sv status


