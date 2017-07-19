DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. The sample scripts are provided AS IS without warranty of any kind. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. The entire risk arising out of the use or performance of the sample scripts and documentation remains with you.

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
