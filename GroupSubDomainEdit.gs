function updateGroups() {
  var pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      domain: 'gameofclouds.com',
      maxResults: 100,
      pageToken: pageToken
    });
    var groups = page.groups;
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        //var email = group.email;
        var email = group.email;
        var id = group.id;
        var index = email.indexOf("@");
        var userName = email.substring(0,email.lastIndexOf("@"));
        AdminDirectory.Groups.update({"email": userName + "@b.gameofclouds.com"}, email);
      }
    } else {
      Logger.log('No groups found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
};
