// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose


function writeResources() {
  var cus = 'my_customer'; //this represents your domain
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var dataset = spreadsheet.getActiveSheet().getDataRange().getValues();
  if (dataset.length > 1) {
  for (i=1; i < dataset.length; i++) {
    var res = {
      resourceName : dataset[i][0],
      resourceId : dataset[i][1],
      resourceType : dataset[i][2]
    }
    AdminDirectory.Resources.Calendars.insert(res, cus);
    Logger.log('Added Resource %s', res.resourceName);
  } 
  } else {
    Logger.log('Spreadsheet empty.');
               }
               }
