function moveEventsToResource() {
    var now = new Date();
    var now = now.toISOString();

  var oldResource = "dundermifflin.net_312e323334333231354537@resource.calendar.google.com";
  var newResource = "dundermifflin.net_2d3435303239313732333332@resource.calendar.google.com";
   
 

   var h = 0;
   var i = 0;

  var events = Calendar.Events.list(oldResource);
  Logger.log(events);

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

