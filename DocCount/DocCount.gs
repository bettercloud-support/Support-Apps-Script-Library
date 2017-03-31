//export all users

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Combine Sheets')
      .addItem('Run Script', 'combine')
      .addItem('Add Counts', 'setCounts')
      
  .addToUi();
}

function combine() {
  //var sheetSheet = SpreadsheetApp.getActiveSheet()
  var sheetSheet = SpreadsheetApp.openById("125rHZgAJof2V3C4tSCc8LH9wW3lYn6vSk6aYcIuV6lk")
  var sheet1 = sheetSheet.getSheetByName("Master Report");
  var sheet2 = sheetSheet.getSheetByName("List of Sheets")
  var sheet3 = sheetSheet.getSheetByName("Users")
  sheet1.clear();
  sheet3.clear()
  
  var lastRowsheetSheet = sheet2.getLastRow();
  var lastRowMaster = sheet1.getMaxRows();
  if (lastRowMaster > 5){
  sheet1.deleteRows(2, lastRowMaster - 2)
  }
  
  var lastRowUsers = sheet3.getMaxRows();
  if (lastRowUsers > 5){
  sheet3.deleteRows(2, lastRowUsers - 2)
  }
  var listofSheets = sheet2.getRange("A2:A"+lastRowsheetSheet).getValues();
  for (var i=0; i < listofSheets.length;i++){
    var valuesheet = SpreadsheetApp.openById(listofSheets[i])
    var len = valuesheet.getLastRow();
    var values = valuesheet.getRange("A1:A"+len).getValues()
    sheet1.insertRowsBefore(1, len)
    sheet1.getRange("A1:A"+len).setValues(values);
  }
  var lastUserRow = sheet3.getMaxRows()
  sheet3.getRange("A2").setFormula("=unique('Master Report'!A2:A)")
 // Logger.log("B2:B"+lastUserRow)
 // sheet3.getRange("B2:B"+lastUserRow).setFormula("=countifs('Master Report'!$A$2:$A,INDIRECT(ADDRESS(ROW(),COLUMN()-1)))")
}

function setCounts(){
    var sheetSheet = SpreadsheetApp.openById("125rHZgAJof2V3C4tSCc8LH9wW3lYn6vSk6aYcIuV6lk")
  var sheet3 = sheetSheet.getSheetByName("Users")
  var lastUserRow = sheet3.getMaxRows()
  Logger.log("B2:B"+lastUserRow)
  sheet3.getRange("B2:B"+lastUserRow).setFormula("=countifs('Master Report'!$A$2:$A,INDIRECT(ADDRESS(ROW(),COLUMN()-1)))")
}
