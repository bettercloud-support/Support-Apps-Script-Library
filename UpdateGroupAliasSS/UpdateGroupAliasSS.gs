function updateGroupAlias() {
    
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues();
  var gAlias = "@dylan.dundermifflin.net"; //enter desired alias domain 
  
  
  for (var i=0;i<groups.length;i++)
  {
    var userName = groups[i];
    Logger.log(userName);
    
    //Logger.log(userName);
    //var string = userName.toString();
    //Logger.log(string);
    
    try {
      
      AdminDirectory.Groups.Aliases.insert({"alias": userName + gAlias}, userName + "@sub.dundermifflin.net"); //takes a group on sub.dudnermifflin.net and adds an alias under dylan.dundermifflin.net 
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("SUCCESS");
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+1)).setValue(userName+gAlias); //column C will update with the new alias
    }
    catch(e) {
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+1)).setValue("PASS -- Group does not exist");
    
    }
   
  }
    
};
