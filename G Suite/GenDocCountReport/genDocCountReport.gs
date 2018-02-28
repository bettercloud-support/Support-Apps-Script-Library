// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

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
