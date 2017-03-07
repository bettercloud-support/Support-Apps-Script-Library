function createGroups(){
 var suffix = "joff"; //group name
 var num = "10"; //create 10 groups
 for (var i = 0; i < num; i++) {
 var group = {
   email: suffix + i +'@gameofclouds.com' //domain name, edit here
   };
   AdminDirectory.Groups.insert(group);
   Logger.log(group);  
 }
};
