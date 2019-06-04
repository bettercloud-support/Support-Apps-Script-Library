// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function getLicenseAssignments() {
   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Email', 'G Suite License'];
    sheet.appendRow(headers);
  var values = [];
  var productId = 'Google-Apps';
  var customerId = 'dundermifflin.net'; //please change dundermifflin.net to your own domain
  var assignments, pageToken;
  do {
    assignments = AdminLicenseManager.LicenseAssignments
        .listForProduct(productId, customerId, {
      maxResults: 1000,
      pageToken: pageToken
    });
  } while (pageToken);
  for (var i = 0; i < assignments.items.length; i++) {
    var assignment = assignments.items[i];
//    Logger.log('userId: %s, productId: %s, skuId: %s',
//        assignment.userId, assignment.productId, assignment.skuId);
    values.push([assignment.userId,assignment.skuId, assignment.skuName]);
    sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
    Logger.log(pageToken);
  }
}

function getLicenseAssignments() {
   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Email', 'G Suite License'];
    sheet.appendRow(headers);
  var values = [];
  var productId = 'Google-Vault';
  var customerId = 'dundermifflin.net'; //please change dundermifflin.net to your own domain
  var assignments, pageToken;
  do {
    assignments = AdminLicenseManager.LicenseAssignments
        .listForProduct(productId, customerId, {
      maxResults: 1000,
      pageToken: pageToken
    });
  } while (pageToken);
  for (var i = 0; i < assignments.items.length; i++) {
    var assignment = assignments.items[i];
//    Logger.log('userId: %s, productId: %s, skuId: %s',
//        assignment.userId, assignment.productId, assignment.skuId);
    values.push([assignment.userId,assignment.skuId, assignment.skuName]);
    sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
    Logger.log(pageToken);
  }
}
