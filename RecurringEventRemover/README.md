DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script will delete a Google Calendar event from every user who's email is entered in cell A2 and below. This is useful if there was a calendar event made by a deleted user, and active users are still invited to the event.

1) First, to get the eventID for the specified event, follow the Google link and then click on the Event > More actions > Troubleshooting Info  https://www.google.com/calendar/render?gsessionid=OK&eventdeb=1
2) Screenshot of step 1: http://screenshots.bettercloud.com/1j1Z2v0n2o2z
3) Open a new Google Sheet in Drive and make a "userEmail" header in Cell A1, that's where you are going input the emails of users being removed from the event. (A2 and below) http://screenshots.bettercloud.com/472h0k3U3K29
4) Click on Tools > Script editor in the Google Sheet.
5) In the Script Editor please copy and paste the code below. 
6) Using the eventID you got earlier, input only the eventID that is before the underscore in the "ENTER_EVENTID_HERE": http://screenshots.bettercloud.com/2m1q1t2y422v
7) Next, click on Resources > Advanced Google Services and enable both the Admin Directory API and the Calendar API. (Enable both of those in the Google API console as well, via the yellow link) http://screenshots.bettercloud.com/1S3d0u0n1Z3d
8) Next, input your user emails into the spreadsheet you created earlier in cell A2 and below.
9) Once that's finished, please save and run the script. It should show 'EVENT REMOVED..' next to the user's email if it was successful. http://screenshots.bettercloud.com/2r3k2N080K2n

Vid of running the script: http://screenshots.bettercloud.com/1L161K141P2v
