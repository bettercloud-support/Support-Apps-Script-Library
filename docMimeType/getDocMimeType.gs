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
