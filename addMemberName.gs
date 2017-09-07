function myFunction() {
  
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ids = ss.getRange("H2:H"+maxRows).getValues(); //gets all emails
  
  for (var i=0;i < ids.length;i++) {
  
    try {
      
      var id2 = AdminDirectory.Users.get(ids[i])
      var names = id2.name.fullName;
      ss.getRange("J" + (i+2)).setValue(names);
    
    }
    
    catch(e) {
      ss.getRange("J" + (i+2)).setValue("Cannot retrieve name");
    }
  }
}
