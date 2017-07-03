// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.


function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Run Report')
      .addItem('Retrieve Google Apps Licenses', 'listGALicenseAssignments')
      .addItem('Retrieve Vault Former Employee Licenses', 'listVFELicenseAssignments')
      
  .addToUi();
}


function listGALicenseAssignments() { //This function retrieves all G Suite Licenses on your DOmain.
  var customerId = 'dundermifflin.net'; //change dundermifflin.net to your own domain.
  var productId = 'Google-Apps';
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId,
      customerId);
  var assignments = response.items;
  if (assignments && assignments.length > 0) {
    Logger.log('License assignments:');
   // var spreadsheet = SpreadsheetApp.create('Google Apps License Report');
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    for (i = 0; i < assignments.length; i++) {
      var assignment = assignments[i];
      Logger.log('%s (%s)', assignment.userId, assignment.skuId);
      var ss = spreadsheet.getActiveSheet();
      ss.getRange("A1").setValue(assignment.userId);
      ss.getRange("B1").setValue(assignment.skuId);
      ss.insertRowBefore(1);
    }
  } else {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ss.getRange("A1").setValue("No G Suite licenses found");
    Logger.log('No license assignments found.');
  }
}  

function listVFELicenseAssignments() { //this function retriveves all Google Vault licenses on your domain.
  var customerId = 'dundermifflin.net'; // please change dundermifflin.net to your own domain.
  var productId = 'Google-Vault';
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId,
      customerId);
  var assignments = response.items;
  if (assignments && assignments.length > 0) {
    Logger.log('License assignments:');
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    for (i = 0; i < assignments.length; i++) {
      var assignment = assignments[i];
      Logger.log('%s (%s)', assignment.userId, assignment.skuId);
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      ss.getRange("A1").setValue(assignment.userId);
      ss.getRange("B1").setValue(assignment.skuId);
      ss.insertRowBefore(1);
    }
  } else {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ss.getRange("A1").setValue("No Vault licenses found");
    Logger.log('No license assignments found.');
  }
}  

