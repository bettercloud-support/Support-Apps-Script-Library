function generateReportForDocsCount() {
  var date = "2016-11-06";
  var maxRows = SpreadsheetApp.openById("enter_spreadsheet_ID").getSheetByName("Sheet1").getLastRow();
  var users = SpreadsheetApp.openById("enter_spreadsheet_ID").getSheetByName("Sheet1").getRange("A1:A"+maxRows).getValues();
  
  
  var parameters = [
    'docs:num_docs',
  ];
    
    for (var k=0; k < users.length; k++){
    
    var report = AdminReports.UserUsageReport.get(users[k], '2016-11-06', {
      parameters: parameters 
    })
    
    
    
    try {
      var numDocs = report.usageReports[0].parameters[0].intValue;
      SpreadsheetApp.openById("enter_spreadsheetID").getSheetByName("Sheet1").getRange("B"+(k+1)).setValue(numDocs)}
  catch(e){
    SpreadsheetApp.openById("enterspreadsheetID").getSheetByName("Sheet1").getRange("B"+(k+1)).setValue("0")}
  
  
}
}

