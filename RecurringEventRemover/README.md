1) Open a new google sheet and make a "userEmail" header in cell A1, that's where you are going input the emails of people being removed from the event. (A2 and below)
2) Click on tools > script editor
3) In the script editor please copy and paste the code below. 
4) Using the eventID you got earlier, input only the eventID that is before the underscore: https://cl.ly/1H3m1G020C0e
5) Next, click on resources > Advanced google services and enable both the Admin Directory API and the Calendar API. (Enable both of those in the Google API console as well, via that link) 
6) Next, input your user emails into the spreadsheet you created earlier in cell A2 and below.
7) Once that's finished, please save and run the script. It should show 'EVENT REMOVED..' next to the user's email if it was successful.
