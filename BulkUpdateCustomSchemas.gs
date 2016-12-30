function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Run Update')
      .addItem('List Users', 'listUsers')
      .addItem('Retrieve Custom Schemas', 'retrieveSchemaValues')
      .addItem('Update Custom Schemas', 'updateSchemaValues')
      
  .addToUi();
}

function retrieveSchemaValues() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var maxRows = ss.getLastRow();
  var users = ss.getRange("A2:A"+maxRows).getValues();
  
  for (var i = 0; i < users.length; i++){
    
    
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var employeeNumber = user.customSchemas.employmentData.EmployeeNumber;
    }
    catch(e){
      var  employeeNumber = "";
    }
    
    ss.getRange("B"+[i+2]).setValue(employeeNumber);
    
    Logger.log(employeeNumber);
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var employeeCompany = user.customSchemas.employmentData.EmployeeCompany;
    }
    catch(e){
      var  employeeCompany = "";
    }
    
    ss.getRange("C"+[i+2]).setValue(employeeCompany);
    
    Logger.log(employeeCompany);
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var city = user.customSchemas.employmentLocation.City;
    }
    catch(e){
      var city = "";
    }
    ss.getRange("D"+[i+2]).setValue(city);
    Logger.log(city);
    
  }
}

function listUsers(){

var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

var pageToken, page;
  do {
    page = AdminDirectory.Users.list({
      domain: 'gameofclouds.com',
      orderBy: 'givenName',
      maxResults: 100,
      pageToken: pageToken
    });
    var users = page.users;
    if (users) {
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        ss.getRange("A"+(i+2)).setValue(user.primaryEmail);
        Logger.log('%s (%s)', user.name.fullName, user.primaryEmail);
      }
    } else {
      Logger.log('No users found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);


}


function updateSchemaValues(){

var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
var maxRows = ss.getLastRow();
var users = ss.getRange("A2:A"+maxRows).getValues();
var employeeNumber = ss.getRange("B2:B"+maxRows).getValues();
var employeeCompany = ss.getRange("C2:C"+maxRows).getValues();
var city = ss.getRange("D2:D"+maxRows).getValues();

for (var i = 0; i < users.length; i++){

Logger.log("USER: " + users[i] + " Number: " + employeeNumber[i] + " Company: " + employeeCompany[i], " City: " + city);

AdminDirectory.Users.update({"customSchemas":{"employmentData":{"EmployeeNumber": employeeNumber[i].toString(), "EmployeeCompany": employeeCompany[i].toString()},"employmentLocation":{"City": city[i].toString()}}}, users[i]);

}
}
