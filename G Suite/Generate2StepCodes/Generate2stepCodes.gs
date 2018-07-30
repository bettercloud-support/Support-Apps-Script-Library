//DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

function backupCodes() {


  var maxRows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getLastRow();
  var users = SpreadsheetApp.getActiveSpreadsheet().getRange("A2:A"+maxRows).getValues(); //Add user primary emails to the A column in the spreadsheet
  var genCodes = [];
  var listCodes = [];
  var codeArray = [];
  var pushArray = [];

  for (var i = 0; i <users.length;i++) {
    try{
    genCodes = AdminDirectory.VerificationCodes.generate(users[i]);

    listCodes = AdminDirectory.VerificationCodes.list(users[i]);

      codeArray[i] = listCodes.items[0].verificationCode;
      codeArray[i+1] = listCodes.items[1].verificationCode;
      codeArray[i+2] = listCodes.items[2].verificationCode;
      }
      catch (e) {
      codeArray[i] = "Could not return code";
      codeArray[i+1] = "Could not return code";
      codeArray[i+2] = "Could not return code";
      }
      
      pushArray.push([codeArray[i]]);
      pushArray.push([codeArray[i+1]]);
      pushArray.push([codeArray[i+2]]);

      Logger.log(pushArray[i]);
      Logger.log(pushArray[i+1]);
      Logger.log(pushArray[i+2]);

    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B"+(i+2)).setValue(pushArray[i*3])
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C"+(i+2)).setValue(pushArray[i*3+1])
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("D"+(i+2)).setValue(pushArray[i*3+2])
  }
 }
