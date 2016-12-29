 var events = Calendar.Events.list(oldResource);
  //Logger.log(events);

  if (events.items && events.items.length > 0) {
    for (var i = 0; i < events.items.length; i++) {
      //var event = events.items[i];
     // var creator = events.items[i].creator.email;
      //var date = events.items[i].start.dateTime;
     // var attendees = events.items[i].attendees[h];
      var eventId = events.items[i].id;
      var endDate = events.items[i].end.dateTime;
      var startDate = events.items[i].start.dateTime;
      var resourceName = events.items[i].attendees.displayName;
      var resourceEmail = events.items[i].attendees.email;
      var h=0;
      while (h < events.items[i].attendees.length)
      {
       if (events.items[i].attendees[h].resource == true){
       Logger.log(events.items[i].attendees[h]);
         //Calendar.Events.update(, oldResource, eventId);
         Calendar.Events.update({"attendees": {"email": newResource,
                                               "displayName": "from here","resource":true},
                                 "end":{"dateTime":endDate}, 
                                 "start":{"dateTime":startDate}, 
                                 "location": "from here", 
                                }, oldResource, eventId);
         
         
        h++;
       }
        else{
          h++;        
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
 //}
 }
