function myFunction() {
  
  for (var i=0; i < 1000; i++){
  DocumentApp.create("Doc" + (i+1)) //Add doc name in the "doc" string
  Logger.log(i);
  }
}
