function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Run Report')
      .addItem('Retrieve Google Apps Licenses', 'listGALicenseAssignments')
      .addItem('Retrieve Vault Former Employee Licenses', 'listVFELicenseAssignments')
      
  .addToUi();
}

function listGALicenseAssignments() {
  var customerId = 'cloudypotter.com';
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
      var ss = spreadsheet.getSheetByName("Google Apps License");
      ss.getRange("A1").setValue(assignment.userId);
      ss.getRange("B1").setValue(assignment.skuId);
      ss.insertRowBefore(1);
    }
  } else {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var ss = spreadsheet.getSheetByName("Google Apps License");
    ss.getRange("A1").setValue("No Google Apps licenses found");
    Logger.log('No license assignments found.');
  }
}  

function listVFELicenseAssignments() {
  var customerId = 'cloudypotter.com';
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
      var ss = spreadsheet.getSheetByName("Vault Former Employee License");
      ss.getRange("A1").setValue(assignment.userId);
      ss.getRange("B1").setValue(assignment.skuId);
      ss.insertRowBefore(1);
    }
  } else {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var ss = spreadsheet.getSheetByName("Vault Former Employee License");
    ss.getRange("A1").setValue("No Vault licenses found");
    Logger.log('No license assignments found.');
  }
}  

