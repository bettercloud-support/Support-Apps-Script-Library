// DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud standard support program or service. 
// The sample scripts are provided AS IS without warranty of any kind. 
// BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose.

function generateUserUsageReport() {
  
  var d = new Date();
  var daysBack = 7; //please adjust the number of days ago that this script is reporting on to your need. 3 is 3 days back 4 is 4 days back..etc
  d.setDate(d.getDate() - daysBack); 
  var timestamp = d.toISOString();
  var realDate = timestamp.slice(0, 10);

  var parameters = [
    'accounts:last_login_time',
    'accounts:last_sso_time',
    'gmail:last_imap_time',
    'gmail:last_pop_time',
    'gmail:last_webmail_time',
    'gmail:last_access_time'  
  ];
  var rows = [];
  var pageToken, page;
  do {
    page = AdminReports.UserUsageReport.get('all', realDate, {
      parameters: parameters.join(','),
      maxResults: 500,
      pageToken: pageToken
    });
    var reports = page.usageReports;
    if (reports) {
      for (var i = 0; i < reports.length; i++) {
        var report = reports[i];
        var parameterValues = getParameterValues(report.parameters);
        var row = [
          report.date,
          report.entity.userEmail,
          parameterValues['accounts:last_login_time'],
          parameterValues['accounts:last_sso_time'],
          parameterValues['gmail:last_imap_time'],
          parameterValues['gmail:last_pop_time'],
          parameterValues['gmail:last_webmail_time'],
          parameterValues['gmail:last_access_time'],
          
        ];
        rows.push(row);
      }
    }
    pageToken = page.nextPageToken;
  } while (pageToken);

  if (rows.length > 0) {
          
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();

    // Append the headers.
    var headers = ['Date', 'User', 'Google Apps Login', 'SSO Login', 'Last IMAP', 'Last POP', 'Webmail Access', 'Last Gmail Access'];
    sheet.appendRow(headers);

    // Append the results.
    
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
    Logger.log('Report spreadsheet created: %s', spreadsheet.getUrl());
  } else {
    Logger.log('No results returned.');
  }
}

/**
 * Gets a map of parameter names to values from an array of parameter objects.
 * @param {Array} parameters An array of parameter objects.
 * @return {Object} A map from parameter names to their values.
 */
function getParameterValues(parameters) {
  return parameters.reduce(function(result, parameter) {
    var name = parameter.name;
    var value;
    if (parameter.intValue !== undefined) {
      value = parameter.intValue;
    } else if (parameter.stringValue !== undefined) {
      value = parameter.stringValue;
    } else if (parameter.datetimeValue !== undefined) {
      value = new Date(parameter.datetimeValue);
    } else if (parameter.boolValue !== undefined) {
      value = parameter.boolValue;
    }
    result[name] = value;
    return result;
  }, {});
}
