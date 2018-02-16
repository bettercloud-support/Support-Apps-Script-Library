DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script updates phone info that is not included in BetterCloud's bulk update sheet for users. The fields incldued in this script are telex, workPager and Pager, but this can be changed by editing the script.
http://screenshots.bettercloud.com/0g2H2v3J2t3I

These are the available phone fields in G Suite: https://developers.google.com/admin-sdk/directory/v1/reference/users
Shown under phones[].type: http://screenshots.bettercloud.com/1H1W1Y1U021Z

1) Open a new Google Sheet in Google Drive.
2) Add the User Emails in Cell A2 and below. Add the desired Phone info in Cell B2, C2 and D2 and below. (Current fields are set to telex, pager and workPager, but this can be changed in the script)
http://screenshots.bettercloud.com/1O2i1O1X0N2y
3) In the Menu bar, go to Tools > Script Editor. 
4) Remove any existing code and paste the Apps Script attached into the Script Editor.
5) In the Script Editor, go to Resources > Advanced Google services and enable the Admin Directory API. 
6) Enable the Admin SDK from the API Console as well. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
7) Run the script, Column E should populate with Success/Failure.

P.S Leaving the field blank WILL set the phone info to blank for your user, unlike BetterCloud's bulk edit sheet. Please be aware when updating multiple users and multiple fields.
