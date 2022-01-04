function WeatherLocate() {
  var temp = new XMLHttpRequest();
  var city = document.getElementById("city").value;
  temp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var results = JSON.parse(this.responseText); // Parsing the JSON into a JavaScript object

          // Append result into table
          var table = document.getElementById("temp");
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = results.location.name;
          cell2.innerHTML = results.current.temperature + "°C";
      }
  };
  temp.open("GET", 'http://api.weatherstack.com/current?access_key=ad83dda1097435ceee3411cd383701d2&query=' + city, true);
  temp.send();

}