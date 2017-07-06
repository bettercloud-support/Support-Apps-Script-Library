// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

function myFunction() {
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A2:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  var input = SpreadsheetApp.getActiveSpreadsheet().getRange("B2:B"+maxRows).getValues(); //Add employeeID to the B column in the spreadsheet
  var IDtype = "organization";
  
  for (var i = 0; i <users.length;i++) {
    
    var empID = input[i].toString();
  
    var userResource = {
    
      "externalIds": [
        
    {
      "value": empID,
      "type": IDtype
    }
        
      ]
    }  
   
    try {
  
    AdminDirectory.Users.update(userResource, users[i]);
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+2)).setValue("SUCCESS");
  
  }
    
    catch(e) {
    
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+2)).setValue("Failed to Update EmployeeID");
      
   
    }
  
  
  }
  }
