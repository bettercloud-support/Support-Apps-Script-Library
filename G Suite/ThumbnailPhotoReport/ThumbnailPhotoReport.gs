//DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function thumbnailPhotoUrl(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Name', 'User', 'Image URL'];
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
    var thumbnailPhotoUrl = '';
      if(users[i].thumbnailPhotoUrl)
        thumbnailPhotoUrl = users[i].thumbnailPhotoUrl
    values.push([users[i].name.fullName, users[i].primaryEmail, thumbnailPhotoUrl ]);
  }
    pageToken = page.nextPageToken;
  } while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}
