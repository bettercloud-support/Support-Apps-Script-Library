
function deleteAllGroups() {
  var pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      domain: 'gameofclouds.com', //enter domain here
      maxResults: 100,
      pageToken: pageToken
    });
    var groups = page.groups;
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        var email = group.email;
        AdminDirectory.Groups.remove(email);
        Logger.log(group.email);
      }
    } else {
      Logger.log('No groups found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
};

function createDocs(){

DriveApp.createFile('Test', 'Test');

}



function myFunction() {

 var pageToken, page;
  do {
    page = Drive.Files.list({
      //domain: 'cloudypotter.com',
      maxResults: 100,
      pageToken: pageToken
    });
    var docs = page.items;
    if (docs) {
      for (var i = 0; i < docs.length; i++) {
        var doc = docs[i];
        Logger.log(doc);
      }
    } else {
      Logger.log('No docs found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);

};


function getFileId(){
  
   var files = DriveApp.getFiles();
   while (files.hasNext()) {
   var file = files.next();
   var id = file.getId();
   Logger.log(file.getId());
 }
  
  //Logger.log(id);
  return id;
  
};


function getEditors(id){
  
 //var ids = getFileId(id);
  
 var file = DriveApp.getFileById('0B-07S8icyjHQRmJIQlJBQnlCamc');
 var editors = file.getEditors();
 for (var i = 0; i < editors.length; i++) {
   Logger.log(editors[i].getEmail());
 }
  
  //Logger.log(editors);
  
};


function getViewers(id){
  
 //var ids = getFileId(id);
  
 var file = DriveApp.getFileById('0B-07S8icyjHQRmJIQlJBQnlCamc');
 var viewers = file.getViewers();
 for (var i = 0; i < viewers.length; i++) {
   Logger.log(viewers[i].getEmail());
 }
  
  //Logger.log(editors);
  
};

function getOwner(id){
  
 var file = DriveApp.getFileById('0B-07S8icyjHQRmJIQlJBQnlCamc');
 var owner = file.getOwner();
 for (var i = 0; i < owner.length; i++) {
   Logger.log(owner[i].getEmail());
 }
  
  Logger.log(owner.getEmail());
 
  
};


function getFileIdOwner(){
  
   var files = DriveApp.getFiles();
   while (files.hasNext()) {
   var file = files.next();
   var id = file.getId();
   file = DriveApp.getFileById(id);
   var owner = file.getOwner();
   Logger.log(id);
   Logger.log(owner.getEmail());
     
 }
  
  //Logger.log(id);
  return id;
  
};
