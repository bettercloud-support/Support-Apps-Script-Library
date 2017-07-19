// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose

function myFunction() {
  
  var d = new Date();
  var daysBack = 7; //please adjust the number of days ago that this script is reporting on to your need. 3 is 3 days back 4 is 4 days back..etc
  d.setDate(d.getDate() - daysBack); 
  var timestamp = d.toISOString();
  var realDate = timestamp.slice(0, 10);
  
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A1:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  
  var parameters = [
    'docs:num_docs'
    
  ];
    
    for (var k=0; k < users.length; k++){

    
    var report = AdminReports.UserUsageReport.get(users[k],realDate, {
      parameters: parameters 
    })
    

   try {
     var numDocs = report.usageReports[0].parameters[0].intValue;
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(k+1)).setValue(numDocs);
     

          }
    
    catch(e) {
    
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(k+1)).setValue("No Data for this date, please adjust the setDate");
   
       }
  
     }

 
   }
