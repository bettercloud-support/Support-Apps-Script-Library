function generateReportForDocsCount() {
  var date = "2016-11-06"; //edit date here
  var maxRows = SpreadsheetApp.openById("1Q_YWFLsOJDWPK6pMpRqn_lGul6EmQVj_sf662h54Bg0").getSheetByName("Sheet1").getLastRow(); //enter docID for spreadsheet here
  var users = SpreadsheetApp.openById("1Q_YWFLsOJDWPK6pMpRqn_lGul6EmQVj_sf662h54Bg0").getSheetByName("Sheet1").getRange("A2:A"+maxRows).getValues(); //enter docID for spreadsheet here
  
  
  var parameters = [
    'docs:num_docs'
  ];
  
  var numDocs = 0;
    
    for (var k=0; k < users.length; k++){
      try{
    var report = AdminReports.UserUsageReport.get(users[k], '2016-11-06', {
      parameters: parameters 
    })
    }
      catch(e){
        report = "";
        SpreadsheetApp.openById("1Q_YWFLsOJDWPK6pMpRqn_lGul6EmQVj_sf662h54Bg0").getSheetByName("Sheet1").getRange("E"+(k+2)).setValue("SKIPPED") //enter docID for spreadsheet here
      }
      
    
    
    try {
      numDocs = report.usageReports[0].parameters[0].intValue;
      SpreadsheetApp.openById("1Q_YWFLsOJDWPK6pMpRqn_lGul6EmQVj_sf662h54Bg0").getSheetByName("Sheet1").getRange("D"+(k+2)).setValue(numDocs)} //enter docID for spreadsheet here
  catch(e){
    numDocs = 0;
    SpreadsheetApp.openById("1Q_YWFLsOJDWPK6pMpRqn_lGul6EmQVj_sf662h54Bg0").getSheetByName("Sheet1").getRange("D"+(k+2)).setValue("0")} //enter docID for spreadsheet here
  
  
}


}
