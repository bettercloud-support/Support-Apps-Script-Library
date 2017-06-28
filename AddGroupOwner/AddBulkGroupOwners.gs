function addGroupOwners() {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A1:A"+ maxRows).getValues(); //gets groups from spreadsheet
  var owner = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("B1:B"+ maxRows).getValues(); //gets users to add as owners from spreadsheet
  var role = "OWNER"; //sets role to owner
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  for (var i = 0; i < groups.length; i++)
  {
    
   var memberList = AdminDirectory.Members.list(groups[i]); //gets all members from group
   
    var k = 0;
    var count = 0;
    
    Logger.log(memberList);
    
    while (k < memberList.members.length) //while k < total number of members in the group
    {
    
      var member = memberList.members[k].email; //member = member in group
      if (owner[i].toString() !== member){ //if owner in spreadsheet does not equal the member in group
      
      k++; // move to next member
      count++; //add a count
      }
      else{ //if owner = member, we do not want to add them to group
       k++; //move to next member
      }
      
      
    }
    
    ss.getRange("C1").setValue("In the group: "+groups[i]);
      ss.getRange("D1").setValue(owner[i]+" has been added as an owner");
      ss.insertRowBefore(1);
    
    if (count == memberList.members.length){ // if the count equals the length of the member list, then we looked through all members and did not find a math so we will add them as an owner
     AdminDirectory.Members.insert({"email": owner[i], "type": "USER", "role": role}, groups[i]);
      
    }
      else { //if the count does not equal the length of the member list, then we looked through all members and found a match so we will upgrade them to an owner
        AdminDirectory.Members.update({"email": owner[i], "type": "USER", "role": role}, groups[i], owner[i]);
      }

    }
  
    count = 0;
}


