function generateUserUsageReport() {

  var d = new Date();
  var daysBack = 7; 
  d.setDate(d.getDate() - daysBack); 
  var timestamp = d.toISOString();
  var realDate = timestamp.slice(0, 10);


  var parameters = [
    'accounts:total_quota_in_mb',
    'accounts:used_quota_in_mb',
    'accounts:used_quota_in_percentage'
    
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
          parameterValues['accounts:total_quota_in_mb'],
          parameterValues['accounts:used_quota_in_mb'],
          parameterValues['accounts:used_quota_in_percentage']
        ];
        rows.push(row);
      }
    }
    pageToken = page.nextPageToken;
  } while (pageToken);


  if (rows.length > 0) {
    var spreadsheet = SpreadsheetApp.create('Google Apps User Usage Report');
    var sheet = spreadsheet.getActiveSheet();


    // Append the headers.
    var headers = ['Date', 'User',
        'Total Quota', 'Used Quota', 'Quota Percentage'];
    sheet.appendRow(headers);


    // Append the results.
    
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
    Logger.log('Report spreadsheet created: %s', spreadsheet.getUrl());
  } else {
    Logger.log('No results returned.');
  }
}
