function myFunction() {
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

//Logger.log("Result: "+ result2)
}
}
function sortMultiDimensional(a,b)
{
// for instance, this will sort the array using the second element

return ((a[1] < b[1]) ? -1 : ((a[1] > b[1]) ? 1 : 0));
}
