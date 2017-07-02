// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.


function myFunction() {
  var pageToken, page;
  //var ssNew = SpreadsheetApp.create("Group Alias");
  //var sheet = ssNew.getSheets()[0];
  do {
    page = AdminDirectory.Groups.list({
      domain: 'ENTER_DOMAIN_HERE', //edit domain here (e.g cloudypotter.com)
      maxResults: 100,
      pageToken: pageToken
    });
    var groups = page.groups;
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        var email = group.email;
        var alias = group.aliases;
        if (alias){
        //var cell = sheet.getRange(1, 1);
        //var newRow = cell.setValue(group.email);
        Logger.log(group.email);
        Logger.log(group.aliases);
        }
      }
    } else {
      Logger.log('No groups found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
};
