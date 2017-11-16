// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.



function nophoto_report(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Photo Type', 'Email'];
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
    var email = users[i].primaryEmail;
    try {
      AdminDirectory.Users.Photos.get(email);
    }
    catch (err) {
      Logger.log(err.message);
      values.push(["no photo", users[i].primaryEmail]);
  }
  }
    pageToken = page.nextPageToken;
  } while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}
