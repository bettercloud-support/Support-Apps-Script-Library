function groupAliasReport() {
  var pageToken, page;
  //var ssNew = SpreadsheetApp.create("Group Alias");
  //var sheet = ssNew.getSheets()[0];
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aliasSheet = ss.getSheetByName("Sheet1");
  var subdomainSheet = ss.getSheetByName("Sheet2");
  var maxRows = subdomainSheet.getLastRow();
  var subdomains = subdomainSheet.getRange("A1:A"+maxRows).getValues();
  
  do {
  for (var h = 0; h < subdomains.length; h++)
  {
    page = AdminDirectory.Groups.list({
      domain: subdomains[h],
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
        for (var k = 0; k < group.aliases.length; k++)
        {
        aliasSheet.getRange("A1").setValue(group.email);
        aliasSheet.getRange("B1").setValue(group.aliases[k]);
        aliasSheet.insertRowBefore(1);
        Logger.log(group.email);
        Logger.log(group.aliases[k]);
        }
        }
      }
    } else {
      Logger.log('No groups found.');
    }
      }
    pageToken = page.nextPageToken;
  } while (pageToken);

};
