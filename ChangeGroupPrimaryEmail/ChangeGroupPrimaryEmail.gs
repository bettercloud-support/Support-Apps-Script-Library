function changeGroupPrimaryEmail() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var oldGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues(); //put the email of the group you wish to change in column A
  var newGroup = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B1:B"+maxRows).getValues(); //put the new group email in column B
  
  
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

