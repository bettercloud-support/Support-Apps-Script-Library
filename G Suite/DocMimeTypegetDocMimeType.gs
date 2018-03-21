// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function myFunction() {
  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getLastRow();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var docs = ss.getRange("A2:A"+maxRows).getValues(); //gets all doc Ids from a spreadsheet
  for (var i = 0; i < docs.length; i++){
    try{
  var doc = Drive.Files.get(docs[i]); //gets doc metadata
  var mime = doc.mimeType; //gets doc mimetype
      ss.getRange("V" + (i+2)).setValue(mime); //sets mimetype in column
    }
    catch(e){
      ss.getRange("V" + (i+2)).setValue("Cannot retrieve Mime Type");// sets column to "Cannot retrieve Mime Type" if we cannot retrieve doc metadata
    } 
  Logger.log(doc);
  }
}
