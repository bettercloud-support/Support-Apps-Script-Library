function work_mobile_report(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Name', 'User', 'Work Mobile'];
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
  for (var i=0; i<users.length; i++){
    var phone = '';
    for(var j in users[i].phones){
      if(users[i].phones[j].type == 'work_mobile')
        phone = users[i].phones[j].value;
    }
    values.push([users[i].name.fullName, users[i].primaryEmail, phone ]);
  }
    pageToken = page.nextPageToken;
  } while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}
