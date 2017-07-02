// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose


function createGroups(){
 var suffix = "joff"; //Enter group name
 var num = "10"; //Enter number of groups you wish to create
 for (var i = 0; i < num; i++) {
 var group = {
   email: suffix + i +'@gameofclouds.com' //change @gameofclouds.com to your domain name
   };
   AdminDirectory.Groups.insert(group);
   Logger.log(group);  
 }
};
