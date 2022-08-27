function confirmation() {
  var title = "<h1>Data submitted!!</h1> <br>";

  //get value from textfielsd/textarea
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var reason = document.getElementById("reason").value;
  var reason1 = document.getElementById("reason1").value;

  //get value from select
  var state = document.getElementById("state").value;

  //get values from radio buttons
  var ele = document.getElementsByName("gender");
  var gender;

  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == "radio") {
      if (ele[i].checked) 
        gender = ele[i].value;
    }
  }

  var ele2 = document.getElementsByName("age");
  var age;

  for (var i = 0; i < ele2.length; i++) {
    if (ele2[i].type == "radio") {
      if (ele2[i].checked) 
        age = ele2[i].value;
    }
  }

  var ele3 = document.getElementsByName("weather");
  var weather;

  for (var i = 0; i < ele3.length; i++) {
    if (ele3[i].type == "radio") {
      if (ele3[i].checked) 
        weather = ele3[i].value;     
    }
  }

  var ele4 = document.getElementsByName("climate");
  var climate;

  for (var i = 0; i < ele4.length; i++) {
    if (ele4[i].type == "radio") {
      if (ele4[i].checked) 
        climate = ele4[i].value;
    }
  }

  var ele5 = document.getElementsByName("importance");
  var importance;

  for (var i = 0; i < ele5.length; i++) {
    if (ele5[i].type == "radio") {
      if (ele5[i].checked) 
        importance = ele5[i].value;
    }
  }

  var ele6 = document.getElementsByName("personal");
  var personal;

  for (var i = 0; i < ele6.length; i++) {
    if (ele6[i].type == "radio") {
      if (ele6[i].checked) 
        personal = ele6[i].value;
    }
  }

  var ele7 = document.getElementsByName("tackle");
  var tackle;

  for (var i = 0; i < ele7.length; i++) {
    if (ele7[i].type == "radio") {
      if (ele7[i].checked) 
        tackle = ele7[i].value;
    }
  }

  //get values from checkboxes
  var checkbox1 = document.getElementsByName("source");
  var values = [];

  for (var i = 0; i < checkbox1.length; i++) {
    if (checkbox1[i].checked == true) {
      values.push(checkbox1[i].value);
    }
  }

  var checkbox2 = document.getElementsByName("cause");
  var causes = [];

  for (var i = 0; i < checkbox2 .length; i++) {
    if (checkbox2 [i].checked == true) {
      causes.push(checkbox2[i].value);
    }
  }

  var checkbox3 = document.getElementsByName("change");
  var changes = [];

  for (var i = 0; i < checkbox3.length; i++) {
    if (checkbox3[i].checked == true) {
      changes.push(checkbox3[i].value);
    }
  }

  var footer = "<h2>Thank you for participating!!!!</h2> <br>";

  document.write(title);
  document.write("1. Full Name: " + name + "<br>");
  document.write("2. Email: " + email + "<br>");
  document.write("3. Phone: " + phone + "<br>");
  document.write("4. Gender: " + gender + "<br>");
  document.write("5. Age: " + age + "<br>");
  document.write("6. State: " + state + "<br>");
  document.write(
    "7. Do you feel the pattern of weather is generally changing? " +
      weather +
      "<br>"
  );
  document.write("8. If yes, why do you think this might be? " + reason + "<br>");
  document.write("9. Have you heard of “climate change”? " + climate + "<br>");
  document.write(
    "10. Where have you heard about climate change? " + values.toString() + "<br>"
  );
  document.write(
    "11. How important is the issue of climate change to you personally? " +
      importance +
      "<br>"
  );
  document.write(
    "12. What do you think causes climate change? " + causes.toString() + "<br>"
  );
  document.write(
    "13. Do you think climate change is something that is affecting or is going to affect you personally? " +
      personal +
      "<br>"
  );
  document.write(
    "14. Who do you think should have the main responsibility for tackling climate change? " + changes.toString() + "<br>"
  );
  document.write(
    "15. Do you think anything can be done to tackle climate change? " + tackle + "<br>"
  );
  document.write("16. If yes, what do you think can be done to tackle climate change? " + reason1 + "<br>");
  document.write(footer);
}
