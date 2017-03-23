function createGroups(){
 var suffix = "joff"; //Enter group name
 var num = "10";
 for (var i = 0; i < num; i++) {
 var group = {
   email: suffix + i +'@gameofclouds.com'
   };
   AdminDirectory.Groups.insert(group);
   Logger.log(group);  
 }
};
