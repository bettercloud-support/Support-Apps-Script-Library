// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function groupAliasReport() {
  var pageToken, page;
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
