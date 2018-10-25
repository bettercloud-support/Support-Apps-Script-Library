function employeeTypeReport() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Name', 'User', 'Employee Type'];
    sheet.appendRow(headers);
  var values = [];
  var pageToken, page;
  do {
  var optionalArgs = {
    customer: 'my_customer',
    orderBy: 'familyName',
    maxResults: 500,
    pageToken: pageToken
  };
    page = AdminDirectory.Users.list(optionalArgs);
  var users = page.users;
 for (var i = 0; i <users.length;i++) {
    
  
    var pvalue = '';
    
   try {
      pvalue = users[i].organizations[1].description;
   }
   
   catch (e) {
     pvalue = " ";
   }
   
   values.push([users[i].name.fullName, users[i].primaryEmail, pvalue]);
     //Logger.log(users[i].organizations[1].description);
   
    }
     pageToken = page.nextPageToken;
  }
  
 while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
 }

