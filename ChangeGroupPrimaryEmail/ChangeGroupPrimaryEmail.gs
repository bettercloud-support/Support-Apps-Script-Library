function changeGroupPrimaryEmail() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var oldGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  var newGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B1:B"+maxRows).getValues();
  
  
  for (var i=0;i<oldGroup.length;i++)
  {
    var oldGroupChange = oldGroup[i];
    var newGroupChange = newGroup[i];
    
    
try{
AdminDirectory.Groups.update({"email": newGroup[i]}, oldGroup[i]);
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("SUCCESS")
}
catch(e){
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue("FAILED")
}
  }
    
};

