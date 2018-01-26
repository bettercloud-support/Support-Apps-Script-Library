function alias_report(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var aliasDomains = []
  aliasDomains = ['alias.cloudsandrec.com', 'cloudsandrec.com.test-google-a.com','cloudsandrec.com']; // List your domains here
  var headers = ['Name', 'User', 'Aliases'];
  sheet.appendRow(headers);
  var values = [];
  var pageToken, page;
  do {
    var optionalArgs = {
    customer: 'my_customer',
    orderBy: 'familyName',
    maxResults: 5,
    pageToken: pageToken
   };
  page = AdminDirectory.Users.list(optionalArgs);
  var users = page.users;
  for (var i=0; i<users.length; i++){
    var aliases = '';
    aliases = users[i].nonEditableAliases;
    var matchAliases = [];
    var hasAlias = false; 
    for (var k in aliases) {
      var currentAlias = aliases[k].toString();
      var splitAlias = currentAlias.substring(currentAlias.lastIndexOf("@")+1, currentAlias.length);
      for (var j = 0; j < aliasDomains.length; j++){
        if (splitAlias == aliasDomains[j]) {
          matchAliases.push(aliases[k]);
          hasAlias = true;
         }
      }
    } 
    if (hasAlias == true) {
      var aliasList = '';
      for (var q in matchAliases){
        if (q<1) {
          aliasList = matchAliases[q];
        }
      else {
        aliasList = aliasList + " | " + matchAliases[q]
      }
    }
    values.push([users[i].name.fullName, users[i].primaryEmail, aliasList]);
    }
  }
  pageToken = page.nextPageToken;
  } while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}
