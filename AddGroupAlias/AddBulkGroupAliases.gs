// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function addGroupAliasFromSheet() {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A1:A"+ maxRows).getValues(); //gets groups from spreadsheet
  var newAlias = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("B1:B"+ maxRows).getValues(); //gets aliases to add from spreadsheet
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("C1:C"+ maxRows).getValues(); //logs success or failure

  for (var i = 0; i < groups.length; i++)
  {
    
   var aliasList = AdminDirectory.Groups.Aliases.list(groups[i]); //gets list of aliases for group
    Logger.log(aliasList);
   
    var k = 0;
    var count = 0;
    
    if (aliasList.aliases !== undefined)
    {
    while (k < aliasList.aliases.length) //while k < total number of aliases in the group
    {
    
      var alias = aliasList.aliases[k].alias; //alias = alias of group
      if (newAlias[i].toString() !== alias){ //if new alias is not equal to current group alias
      
      k++; // move to next alias
      count++; //add a count
      }
      else{ //if owner = alias, we do not want to add them to group
       k++; //move to next member
      }
    }
    
    
    if (count == aliasList.aliases.length){ // if the count equals the length of the alias list, then we looked through all aliases and did not find a match so we will add it as an alias
     AdminDirectory.Groups.Aliases.insert({"alias": newAlias[i]}, groups[i]); //adds alias to group
     var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("C1:C"+ maxRows).setValue("SUCCESS"); //adds success message to spreadsheet
     
    }
      else { 
       var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("C1:C"+ maxRows).setValue("ALIAS ALREADY EXISTS. SKIPPED."); //if the count does not equal the length of the alias list, then we looked through all aliases and found a match so we log this as skipped
      }

    }
    else{
      AdminDirectory.Groups.Aliases.insert({"alias": newAlias[i]}, groups[i]);
      var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("C1:C"+ maxRows).setValue("SUCCESS"); 
    }
  }
  
    count = 0;

  }
