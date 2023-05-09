function addRow()
{
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("place").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("date").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("amount").value);
    cell.appendChild(cellText);
    row.appendChild(cell);
    table.appendChild(row);

}
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("credits").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "credits.txt");
    xhttp.send();
  }