function cost_center() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Name', 'User', 'Cost Center'];
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
     pvalue = users[i].organizations[0].costCenter;
     values.push([users[i].name.fullName, users[i].primaryEmail, pvalue]);
     Logger.log(pvalue);
   
    }
     pageToken = page.nextPageToken;
  }
  
 while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
 }
