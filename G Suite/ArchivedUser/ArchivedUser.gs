function archiveUser() {
  
  var maxRows = SpreadsheetApp.openById("enterDocIDHere").getSheetByName("Sheet1").getLastRow();
  var users = SpreadsheetApp.openById("enterDocIDHere").getSheetByName("Sheet1").getRange("A1:A"+maxRows).getValues();
  
    
    for (var i = 0; i < users.length; i++) {
    
          
      try {
      var email = users[i];
      AdminDirectory.Users.patch({"archived":true}, email)
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS");
      }
     catch(e) {
 
       SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("Failed to archive user: " + e);
       
     }
    
  }
  
}
