function setPhoneInfo() {
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A2:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  var input1 = SpreadsheetApp.getActiveSpreadsheet().getRange("B2:B"+maxRows).getValues(); //Add phone fields to the B column in the spreadsheet
  var input2 =  SpreadsheetApp.getActiveSpreadsheet().getRange("C2:C"+maxRows).getValues(); //Add phone fields to the C column in the spreadsheet
  var input3 =  SpreadsheetApp.getActiveSpreadsheet().getRange("D2:D"+maxRows).getValues(); //Add phone fields to the D column in the spreadsheet
  
  for (var i = 0; i <users.length;i++) {
    
    var wpager = input1[i].toString();
    var reg_pager = input2[i].toString();
    var telexNum = input3[i].toString();
  
    var userResource = {
    
      "phones": [
      
      {
        "type": "work_pager",
        "value": wpager,
      },
        
        {
        "type": "pager",
        "value": reg_pager,
      },
        
      {
        "type": "telex",
        "value" : telexNum,
      }
 
    ]
    
  }
     
    try {
  
    AdminDirectory.Users.update(userResource, users[i]);
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("E"+(i+2)).setValue("SUCCESS");
  
  }
    
    catch(e) {
    
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("E"+(i+2)).setValue("Failed to update phone info");
   
    }

    }

}
