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
