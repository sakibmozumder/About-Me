function openPDF(pdf){
  window.open(pdf);
  return false;
}

function converter(){
  if (document.getElementById('itemList').style.display == "block"){
  document.getElementById('itemList').style.display = "none";
  }
  else{
  document.getElementById('itemList').style.display = "block";
  }
}

function selUnits(){
  var e = document.getElementById("itemIndex");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  if(value == "0"){
    alert("You have not selected anything")
    document.getElementById('itemlen').style.display = "none";
    document.getElementById('itemweight').style.display = "none";
    document.getElementById('itemvol').style.display = "none";
    document.getElementById('itemar').style.display = "none";
  }
  else if (value == "length"){
    document.getElementById('itemlen').style.display = "block";
    document.getElementById('itemweight').style.display = "none";
    document.getElementById('itemvol').style.display = "none";
    document.getElementById('itemar').style.display = "none";
  }
  else if (value == "weight"){
    document.getElementById('itemweight').style.display = "block";
    document.getElementById('itemlen').style.display = "none";
    document.getElementById('itemvol').style.display = "none";
    document.getElementById('itemar').style.display = "none";
    }
  else if (value == "volume"){
    document.getElementById('itemweight').style.display = "none";
    document.getElementById('itemlen').style.display = "none";
    document.getElementById('itemvol').style.display = "block";
    document.getElementById('itemar').style.display = "none";
    }
  else if(value == "area"){
    document.getElementById('itemweight').style.display = "none";
    document.getElementById('itemlen').style.display = "none";
    document.getElementById('itemvol').style.display = "none";
    document.getElementById('itemar').style.display = "block";
  }
}


function lenconv(){
  var elem = document.getElementById("valuelen");
  var val = elem.value;
  if(val==""){
  alert("Nothing to show, try again");
  }
  else{
    if(document.getElementById("itemlenfrom").value=="0" ||document.getElementById("itemlento").value=="0"){
    alert("Please select from the dropdown box of 'From' and 'To'");
    }
    else{
      var dict = {"1":9144,
              "2":4571,
              "3":10000,
              "4":254,
              "5":3048};
      var elem = document.getElementById('myDivlen');
      var msg = val*(dict[document.getElementById("itemlenfrom").value]/dict[document.getElementById("itemlento").value]);
      msg = msg.toFixed(4)
      elem.innerHTML = msg.toString()+" "+document.getElementById("itemlento").options[document.getElementById("itemlento").selectedIndex].text+"<br />";
    }
  }
}

function volconv(){
  var elem = document.getElementById("valuevol");
  var val = elem.value;
  if(val==""){
  alert("Nothing to show, try again");
  }
  else{
    if(document.getElementById("itemvolfrom").value=="0" ||document.getElementById("itemvolto").value=="0"){
    alert("Please select from the dropdown box of 'From' and 'To'");
    }
    else{
      var dict = {"1":10000,
              "2":283.168,
              "3":10,
              "4":37.8541,
              "5":4.73176,
              "6":2.36588};
      var elem = document.getElementById('myDivvol');
      var msg = val*(dict[document.getElementById("itemvolfrom").value]/dict[document.getElementById("itemvolto").value]);
      msg = msg.toFixed(4)
      elem.innerHTML = msg.toString()+" "+document.getElementById("itemvolto").options[document.getElementById("itemvolto").selectedIndex].text+"<br />";
    }
  }
}

function wtconv(){
  var elem = document.getElementById("valuewt");
  var val = elem.value;
  if(val==""){
  alert("Nothing to show, try again");
  }
  else{
    if(document.getElementById("itemweightfrom").value=="0" ||document.getElementById("itemweightto").value=="0"){
    alert("Please select from the dropdown box of 'From' and 'To'");
    }
    else{
      var dict = {"1":37.32417216,
              "2":0.933104304,
              "3":0.0116638038,
              "4":1,
              "5":0.453592,
              "6":0.0283495};
      var elem = document.getElementById('myDivwt');
      var msg = val*(dict[document.getElementById("itemweightfrom").value]/dict[document.getElementById("itemweightto").value]);
      msg = msg.toFixed(4)
      elem.innerHTML = msg.toString()+" "+document.getElementById("itemweightto").options[document.getElementById("itemweightto").selectedIndex].text+"<br />";
    }
  }
}

function arconv(){
  var elem = document.getElementById("valuear");
  var val = elem.value;
  if(val==""){
  alert("Nothing to show, try again");
  }
  else{
    if(document.getElementById("itemarfrom").value=="0" ||document.getElementById("itemarto").value=="0"){
    alert("Please select from the dropdown box of 'From' and 'To'");
    }
    else{
      var dict = {"1":1,
              "2":66.89019,
              "3":40.468564224,
              "4":1337.8038,
              "5":4046.8564224,
              "6":10000,
              "7":0.09290304};
      var elem = document.getElementById('myDivar');
      var msg = val*(dict[document.getElementById("itemarfrom").value]/dict[document.getElementById("itemarto").value]);
      msg = msg.toFixed(4)
      elem.innerHTML = msg.toString()+" "+document.getElementById("itemarto").options[document.getElementById("itemarto").selectedIndex].text+"<br />";
    }
  }
}
