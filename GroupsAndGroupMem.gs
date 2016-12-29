function myFunction() {
  //var cache = CacheService.getPublicCache();
  //var c = cache.get("groupsCache");
  //if (cache.get("groupsCache")== null){
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getLastRow();
  var groups = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A1:B"+maxRows).getValues();
  //}
  //else{
  //groups = cache.get("groupsCache")}
  var groups = groups.sort();
  //var groups = sortMe(group);
  Logger.log(groups)
  for(var i=0; i <groups.length; i++){  // look at first set of data
    for(var x=0;x<groups.length;x++){ // look at set of data to the right (to compare against child and see if they are equal)
    var child = groups[i][1]  // grab child
    var parent = groups[x][0]  // grab parent 
    var newchild = groups[x][1] // child of parent above
      if (child == parent){ // if child == parent then app
     // SpreadsheetApp.getActiveSheet().insertRowBefore(1)
      groups[i].push(newchild) // add newchild to child
      groups.splice(x , 1) // remove parent
      x = 0
      i=0
      //cache.put("groupsCache",groups,500);
      };
    };
  };
  for (var b=0;b < groups.length;b++){
  for(var a=0; a<groups[b].length;a++){
    var zenSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
    //zenSheet.insertRowBefore(1);
    zenSheet.getRange(1,a+1).setValue(groups[b][a]);
   
  };
     zenSheet.insertRowBefore(1)
};
//cache.resetAll();
};

//function cache (){
//
//var cache = CacheService.getPublicCache();
//var cache2 = cache.get("groupsCache");
//Logger.log(cache2);
//
//
//}


function groupMembers(){

var maxRows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet4").getLastRow();
var groups = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet4").getRange("A1:B"+maxRows).getValues();
var string = "";
//Logger.log(groups);

SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").insertRowBefore(1);
    string = groups[0][1];

while (groups.length > 1){   // look at first set of data
    
    
    
   
   var parent = groups[0][0]
   var parent2 = groups[1][0]
   var member = groups[1][1]
   
   
   if (parent==parent2)
   {
   //Logger.log(member);
   //Logger.log("parent: " + parent + ", member " + member)
   string = string + ", " + member;
   groups.splice(1 , 1);
   } else{
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").getRange("B1").setValue(string);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").getRange("A1").setValue(parent);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").insertRowBefore(1);
  groups.splice(0, 1);
  string = groups[0][1];
}

}
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").getRange("B1").setValue(string);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").getRange("A1").setValue(parent);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5").insertRowBefore(1);
  groups.splice(0, 1)

  }
