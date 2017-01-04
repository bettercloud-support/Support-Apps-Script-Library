function generateReportForDocsCount() {
  var date = "2016-11-06";
  var maxRows = SpreadsheetApp.openById("1hVvTo8VtnQAADSTejx7eQNe8KOWC9c9AmUESs6sF_dU").getSheetByName("Sheet1").getLastRow();
  var users = SpreadsheetApp.openById("1hVvTo8VtnQAADSTejx7eQNe8KOWC9c9AmUESs6sF_dU").getSheetByName("Sheet1").getRange("A1:A"+maxRows).getValues();
  
  
  var parameters = [
    'docs:num_docs',
  ];
    
    for (var k=0; k < users.length; k++){
    
    var report = AdminReports.UserUsageReport.get(users[k], '2016-11-06', {
      parameters: parameters 
    })
    
    
    
    try {
      var numDocs = report.usageReports[0].parameters[0].intValue;
      SpreadsheetApp.openById("1TmGdzoq7t9TWGEbycWE02AqNa5FaWLG1C51-uS_WlJU").getSheetByName("Sheet1").getRange("B"+(k+1)).setValue(numDocs)}
  catch(e){
    SpreadsheetApp.openById("1TmGdzoq7t9TWGEbycWE02AqNa5FaWLG1C51-uS_WlJU").getSheetByName("Sheet1").getRange("B"+(k+1)).setValue("0")}
  
  
}
}

