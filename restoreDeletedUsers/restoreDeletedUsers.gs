// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

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
