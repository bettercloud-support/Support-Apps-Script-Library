function changeGroupEmail() { //changes email of group on a specific domain that contains certain text
  var pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      domain: 'gameofclouds.com', //domain that groups are on
      maxResults: 100,
      pageToken: pageToken
    });
    var groups = page.groups;
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        var string = group.email.toString();
        if (string.indexOf("corp") > -1){ //change corp to your desired string 
        var index = string.indexOf("@"); 
        var userName = string.substring(0,string.lastIndexOf("@")); //gets user name of group before @ symbol
        AdminDirectory.Groups.update({"email": userName + "@b.gameofclouds.com"}, userName + "@gameofclouds.com"); //change the gameofclouds domains to your desired subdomains
        Logger.log(userName);
        }
        
      }
    } else {
      Logger.log('No groups found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
