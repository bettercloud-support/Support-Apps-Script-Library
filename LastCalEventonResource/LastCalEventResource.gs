// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function lastEvent() {
var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
var resources = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A"+maxRows).getValues(); //paste resourceID in column A
var eventName = [];
var startDate = [];
var resultArray = [];
for (var k=0; k<resources.length;k++)
{
var events = Calendar.Events.list(resources[k],{"maxResults":2500});
var resource = resources[k];


for (var i=0; i<events.items.length; i++){
eventName[i] = events.items[i].summary;
startDate[i] = events.items[i].start.dateTime;
resultArray[i] = [eventName[i], startDate[i]];

}    
var result = resultArray.sort(sortMultiDimensional);
var result2 = result.slice(-1)[0]


Logger.log(result2);
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(k+1)).setValue(result2[0]); //Name of event sent in column B
SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(k+1)).setValue(result2[1]); //Time of event sent in column C

}
}
function sortMultiDimensional(a,b)
{
// for instance, this will sort the array using the second element

return ((a[1] < b[1]) ? -1 : ((a[1] > b[1]) ? 1 : 0));
}
