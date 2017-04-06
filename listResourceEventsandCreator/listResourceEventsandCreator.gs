function listResourceEventsAndCreator() {
    var now = new Date();
    var now = now.toISOString();
 
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  var resource = "cloudypotter.com_39633561623666312d393134652d343133622d626632352d663735316330383866303762@resource.calendar.google.com";
 

   //var h=0;

   var events = Calendar.Events.list(resource);

  if (events.items && events.items.length > 0) {
    for (var i = 0; i < events.items.length; i++) {
      var event = events.items[i];
      var creator = events.items[i].creator.email;
      var date = events.items[i].start.dateTime;
     if (date > now)
      {
       ss.getRange("A1").setValue(creator);
       ss.getRange("B1").setValue(event.summary);
       ss.getRange("C1").setValue(events.summary);
        ss.insertRowBefore(1);
       Logger.log("Creator: " + creator);
       Logger.log("Event name: " + event.summary);
       Logger.log("Resource name: " + events.summary);
      Logger.log("Date:" + date);
      }
      }
  } else {
   // Logger.log('No events found.');
  }
}



function moveEventsToResource() {
    var now = new Date();
    var now = now.toISOString();

  var oldResource = "cloudypotter.com_39633561623666312d393134652d343133622d626632352d663735316330383866303762@resource.calendar.google.com";
  var newResource = "cloudypotter.com_32303062343536312d633032642d343632662d626230312d623834316233643230323637@resource.calendar.google.com";
   
 

   var h=0;
   var i = 0

  var events = Calendar.Events.list(oldResource);
  //Logger.log(events);

  if (events.items && events.items.length > 0) {
   // for (var i = 0; i < events.items.length; i++) {
    while ( i < events.items.length)
    {
      var event = events.items[i];
      var creator = events.items[i].creator.email;
      var date = events.items[i].start.dateTime;
      var attendees = events.items[i].attendees[h];
      while (h < events.items[i].attendees.length)
      {
       if (events.items[i].attendees[h].resource = true){
       Logger.log(events.items[i].attendees[h]);
        h++;
         i++;


       }
        else{
          h++;
          i++;
        }
      }
//     if (date > now)
//      {
//       Logger.log("Creator: " + creator);
//       Logger.log("Event name: " + event.summary);
//       Logger.log("Resource name: " + events.summary);
//      Logger.log("Date:" + date);
//      }
//      }
//  } else {
//   // Logger.log('No events found.');
//  }
//}
  }

 }
 //}
 }



 function listResourceEventsAndCreator() {
    var now = new Date();
    var now = now.toISOString();

  var oldResource = "cloudypotter.com_34643362373234612d366161352d346162312d613064372d613761383130633030363334@resource.calendar.google.com"; //act test
  var newResource = "cloudypotter.com_38643838346630392d633438382d346134622d626363342d313033376431663033613435@resource.calendar.google.com"; //from here
 }
