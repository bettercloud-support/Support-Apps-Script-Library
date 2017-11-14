// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

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
  var pageToken = '5';
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId, customerId, {maxResults: 1000, pageToken: pageToken});
  var assignments = response.items;
  if (assignments && assignments.length > 0) {
    Logger.log('License assignments:');
   // var spreadsheet = SpreadsheetApp.create('Google Apps License Report');
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    for (i = 0; i < assignments.length; i++) {
      var assignment = assignments[i];
      Logger.log('%s (%s)', assignment.userId, assignment.skuId);
      var ss = spreadsheet.getActiveSheet();
      ss.getRange("A1:B1").setValue([assignment.userId,assignment.skuId]);
      //ss.getRange("B1").setValue(assignment.skuId);
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
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId, customerId, {maxResults: 1000, pageToken: '5'});
  var assignments = response.items;
  if (assignments && assignments.length > 0) {
    Logger.log('License assignments:');
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    for (i = 0; i < assignments.length; i++) {
      var assignment = assignments[i];
      Logger.log('%s (%s)', assignment.userId, assignment.skuId);
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      ss.getRange("A1:B1").setValue([assignment.userId,assignment.skuId]);
      //ss.getRange("B1").setValue(assignment.skuId);
      ss.insertRowBefore(1);
    }
  } else {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ss.getRange("A1").setValue("No Vault licenses found");
    Logger.log('No license assignments found.');
  }
}  
