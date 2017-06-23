function myFunction() {
  
    var d = new Date();
  d.setDate(d.getDate() - 3); //please adjust the date to your need. -3 is 3 days back -4 is 4 days back..etc
  var timestamp = d.toISOString();
  var realDate = timestamp.slice(0, 10);
  
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A1:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  
  var parameters = [
    'docs:num_docs',
    'docs:num_shared_docs',
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
