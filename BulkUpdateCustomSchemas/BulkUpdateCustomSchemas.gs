//custom fields may not pertain to your domain, feel free to clone and edit

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Run Update')
      .addItem('List Users', 'listUsers')
      .addItem('Retrieve Custom Schemas', 'retrieveSchemaValues')
      .addItem('Update Custom Schemas', 'updateSchemaValues')
      
  .addToUi();
}

function retrieveSchemaValues() { //a GET for all your existing custom schemas
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var maxRows = ss.getLastRow();
  var users = ss.getRange("A2:A"+maxRows).getValues();
  
  for (var i = 0; i < users.length; i++){
    
    
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var employeeNumber = user.customSchemas.employmentData.EmployeeNumber; //EmployeeNumber is an example custom schemas this needs to be changed to your own
    }
    catch(e){
      var  employeeNumber = "";
    }
    
    ss.getRange("B"+[i+2]).setValue(employeeNumber);
    
    Logger.log(employeeNumber);
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var employeeCompany = user.customSchemas.employmentData.EmployeeCompany; //example custom schema, needs to be changed to your own in all instances
    }
    catch(e){
      var  employeeCompany = "";
    }
    
    ss.getRange("C"+[i+2]).setValue(employeeCompany);
    
    Logger.log(employeeCompany);
    
    try {
      var user = AdminDirectory.Users.get(users[i], {projection:"full"});
      var city = user.customSchemas.employmentLocation.City; //example custom schema, needs to be changed to your own in all instances
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
      domain: 'gameofclouds.com', //enter domain here
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


function updateSchemaValues(){ //Updates your custom schemas via spreadsheet

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
