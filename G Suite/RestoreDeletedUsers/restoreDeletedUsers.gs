// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

var logSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function myFunction() {
  
  var d = new Date();
  var daysBack = 5; //Will undelete users deleted up to 5 days ago. Users can only be restored for up to 5 days after deletion. Feel free to decrease the value, but it cannot exceed 5. 
  d.setDate(d.getDate() - daysBack); 
  var timestamp = d.toISOString();
  var realDate = timestamp.slice(0, 10);
  
  
  var deletedUsers = AdminDirectory.Users.list({"customer": "my_customer", "showDeleted": true});
  var resource = {"orgUnitPath":"/"}; //Orgunit for restoration. Please change to your own desired Org Unit. Use "/" for Root OU. Currently set to Root by default.
  for (var i = 0; i < deletedUsers.users.length; i++){
    var deletedDate = deletedUsers.users[i].deletionTime;
    if (deletedDate > timestamp) //Will undelete users deleted up to 5 days ago by default. 
    {
    var id = deletedUsers.users[i].id; 
      var email = deletedUsers.users[i].primaryEmail;
    Logger.log(id);
    Logger.log(deletedDate);
    Logger.log(deletedUsers.users[i].primaryEmail)
    AdminDirectory.Users.undelete(resource,id)
    logSheet.insertRowBefore(2)
    logSheet.getRange("A2:C2").setValues([[Date( ),id,email]]) //Restored users will be populated in the spreadshet.
    }
  }
  
}
