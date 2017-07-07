// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose


function myFunction() {
  
  var num = 5; //Please change "num" to the number of docs you wish to create. Set to 5 by default.
  
  for (var i=0; i < num; i++){
  DocumentApp.create("Doc" + (i+1)) //Add doc name in the "doc" string
  Logger.log(i);
  }
}
