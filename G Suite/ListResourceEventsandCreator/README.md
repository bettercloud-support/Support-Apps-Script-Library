DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

Summary: Ths script lists all the upcoming events on a specified Google Calendar Resource.

1) Open a new Google Sheet in Drive.
2) In the menu bar, go to Tools > Script Editor.
3) Paste the attached Apps Script into the Script Editor.
4) Go to Resources > Advanced Google Services and enable the Google Calendar API. Enable the Calendar API from the API console as well.
5) Add a Google Calendar Resource email to the variable "resource" in the Apps Script. http://screenshots.bettercloud.com/0Z0e3l0V1S1d 
6) You can get the Resource email from BetterCloud under Google Apps > Calendar > Audit > Resource tab. Then click on the resource name and go to Details to see the email. http://screenshots.bettercloud.com/2U3h0g1q1i2h
7) You can also get the Calendar ID from Google Calendar under Calendar Settings: http://screenshots.bettercloud.com/2N1k3Q1B2g3P
8) Press the 'Play' button to run the script. Accept the permissions.
9) The spreadsheet will then populate with the creator of the event in Column A, the name of the event in Column B and the Resource Name in Column C. http://screenshots.bettercloud.com/1A1a0N0O0j1Q
