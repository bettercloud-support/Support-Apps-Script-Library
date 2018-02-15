// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. 
// The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. 
// By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function getLicenses(){ //this function retrieves all G Suite Licenses on your domain
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Email', 'G Suite License'];
    sheet.appendRow(headers);
  var customerId = 'dundermifflin.net'; //change dundermifflin.net to your own domain.
  var productId = 'Google-Apps';
  var pageToken = '5';
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId, customerId, {maxResults: 1000, pageToken: pageToken});
  var assignments = response.items;
  var values = [];
  var pageToken, page;
  do {

    page = assignments;
  //var users = page.users;
  for (var i=0; i<page.length; i++){
    var assignment = assignments[i];
    
    values.push([assignment.userId,assignment.skuId]);
    }
     pageToken = page.nextPageToken;
  }
  
  while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
 }

function getVFELicenses(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
  var headers = ['Email', 'G Suite License'];
    sheet.appendRow(headers);
  var customerId = 'dundermifflin.net'; //change dundermifflin.net to your own domain.
  var productId = 'Google-Vault';
  var pageToken = '5';
  var response = AdminLicenseManager.LicenseAssignments.listForProduct(productId, customerId, {maxResults: 1000, pageToken: pageToken});
  var assignments = response.items;
  var values = [];
  var pageToken, page;
  do {

    page = assignments;
  //var users = page.users;
  for (var i=0; i<page.length; i++){
    var assignment = assignments[i];
    
    values.push([assignment.userId,assignment.skuId]);
    }
     pageToken = page.nextPageToken;
  }
  
  while (pageToken);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
 }
