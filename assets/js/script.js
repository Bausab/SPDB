// Add an event listener to the table
window.addEventListener("load", function() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
  
    // Iterate through each row and add click event listener
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      row.addEventListener("click", function() {
        // Action performed when a row is clicked
        console.log("Row clicked!");
      });
    }
  });
  