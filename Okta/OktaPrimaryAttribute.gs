var domain = "mydomain" // place your Okta domain here (everything between https:// and .com)
var token = "myOktaAPIToken" // place your Okta token here
function setPrimary() {
  var IDarray;
  IDarray = getIDs();
  for (i=0; i < IDarray.length; i++) {
    try { 
  var userID = IDarray[i]
  var payload = 
      {
            "profile":
            {  
              "primary" : "true"
            }
          };
  
    var payload2 = JSON.stringify(payload);
  
  
  
  var options = 
  {
        "method" : "post",
        "headers" : 
        {
          "Authorization" :  "SSWS " + token,
          "Accept" : "application/json",
          "Content-Type" : "application/json"
          
        },
    "payload" : payload2
      };
  
 var result2 = UrlFetchApp.fetch("https://" + domain + ".com/api/v1/users/" + userID, options); 
      SpreadsheetApp.getActiveSheet().getRange("B" + (i + 1)).setValue("Success") 
    }
    catch (e) {
     SpreadsheetApp.getActiveSheet().getRange("B" + (i + 1)).setValue("Error setting primary field")
    }
  }
}

function getIDs() {
  var idSheet = SpreadsheetApp.getActiveSheet();
  var lastRow = idSheet.getLastRow();
  var resultArray = [];
  for (i = 0; i<lastRow; i++) {
    resultArray.push(idSheet.getRange("A" + (i + 1)).getValue())
  }
  return resultArray;
}

