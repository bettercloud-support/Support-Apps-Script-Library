// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function changeGroupEmail() { //changes email of group on a specific domain that contains certain text
  var pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      domain: 'dundermifflin.net', //domain that groups are on
      maxResults: 100,
      pageToken: pageToken
    });
    var groups = page.groups;
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        var string = group.email.toString();
        if (string.indexOf("distro0") > -1){  //gets user name of group before @ symbol. All groups that start with name distro0 will have their domain changed. Please change this to your own group names.
        var index = string.indexOf("@"); 
        var userName = string.substring(0,string.lastIndexOf("@")); 
        AdminDirectory.Groups.update({"email": userName + "@sub.dundermifflin.net"}, userName + "@dundermifflin.net"); //This script takes a group on dundermifflin.net and changes it to sub.dundermifflin.net
         //Please change all instances of dundermifflin.net to your own domains.
        Logger.log(userName);
        }
        
      }
    } else {
      Logger.log('No groups found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
