var logSheet = SpreadsheetApp.openById("1MYWMDyGg1MbItcT4yYrYwgi2e3HKIhd085vgWib6New").getSheetByName("Log") 

function myFunction() {
  var deletedUsers = AdminDirectory.Users.list({"customer": "my_customer", "showDeleted": true});
  var resource = {"orgUnitPath":"restored"}; //orgunit 
  //Logger.log(deletedUsers.users[0].id);
  for (var i = 0; i < deletedUsers.users.length; i++){
    var deletedDate = deletedUsers.users[i].deletionTime;
    if (deletedDate > "2016-11-20T03:20:44.000Z") //change date
    {
    var id = deletedUsers.users[i].id; //gets Google ID (required to restore user)
      var email = deletedUsers.users[i].primaryEmail;
    Logger.log(id);
    Logger.log(deletedDate);
    Logger.log(deletedUsers.users[i].primaryEmail)
    AdminDirectory.Users.undelete(resource,id)
    logSheet.insertRowBefore(2)
    logSheet.getRange("A2:C2").setValues([[Date( ),id,email]])
    }
  }
  
}
