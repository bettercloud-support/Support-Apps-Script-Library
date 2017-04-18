function myFunction() {
  
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A2:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  var ccinput = SpreadsheetApp.getActiveSpreadsheet().getRange("B2:B"+maxRows).getValues(); //Add costcenter to the B column in the spreadsheet
  for (var i = 0; i <users.length;i++) {
    
    var cCenter = ccinput[i].toString();
  
    var userResource = {
    
      "organizations": [
      
      {
        "costCenter": cCenter
      }
   
    ]
    
  }
     
    try {
  
    AdminDirectory.Users.update(userResource, users[i]);
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+2)).setValue("SUCCESS");
  
  }
    
    catch(e) {
    
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+2)).setValue("Failed to Update CostCenter");
   
    }
  
  
  
  }
  
  
  
}
