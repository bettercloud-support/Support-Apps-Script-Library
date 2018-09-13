var groupKey = "classic-men@dundermifflin.net"; // Change this to the email address of your group
var groupName = AdminDirectory.Groups.get(groupKey).name;
var rows = [];
var pageToken, page;
var includeGroups = false; // Set to true if you would like to include group names in member list results

function MainGetUserList(){
  addToList(groupKey, groupName, "-");
  printList();
}

function addToList(groupEmailAdd, groupNameAdd, parentName){
        
  do { 
     page = AdminDirectory.Members.list(groupEmailAdd,
        {
            domainName: 'dundermifflin.net', // Change this to your domain 
            pageToken: pageToken,
            maxResults: 10000
        });
        var groups = [];
        var members = page.members
        if (members) {
            for (var i = 0; i < members.length; i++) {
              var member = members[i];
              try { 
                var memberInfo = AdminDirectory.Users.get(member.email);
                var row = [parentName, groupNameAdd, groupEmailAdd, memberInfo.name.givenName, memberInfo.name.familyName, member.email, member.role, member.status, member.type];
                rows.push(row);
                Logger.log(row);
              }
              catch (e) {
                try {
                  var currentGroupName = AdminDirectory.Groups.get(member.email);
                  if (includeGroups == true) {
                  var row = [parentName, groupNameAdd, groupEmailAdd, currentGroupName.name, "-", member.email, member.role, member.status, member.type];
                    Logger.log(row);
                    rows.push(row);
                  }
                  groups.push(member.email); 
                }
                catch (e) {
                  var row = [parentName, groupNameAdd, groupEmailAdd, "-", "-", member.email, member.role, member.status, "EXTERNAL"];
                  rows.push(row);
                  Logger.log("Cannot retrieve name of external user " + member.email);
                }
              } 
              }
            }
            Logger.log(groups);
            pageToken = page.nextPageToken;
        } while (pageToken);
            while (groups.length > 0) {
              var currentGroup = groups.pop();
              addToList(currentGroup, AdminDirectory.Groups.get(currentGroup).name, groupNameAdd);
            }
        }
function printList() {
  if (rows.length > 0) {
          var onSheet = SpreadsheetApp.getActiveSpreadsheet();
          var sheetData = onSheet.getSheetByName("Sheet1")
          var header = ['Parent Group', 'Group Name', 'Group Key', 'First', 'Last', 'Email', 'Role', 'Status', 'Type'];
          sheetData.appendRow(header).setFrozenRows(1);
          sheetData.getRange(2, 1, rows.length, header.length).setValues(rows);
  }
} 
