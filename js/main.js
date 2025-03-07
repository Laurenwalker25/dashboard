// function for search bar
/*
function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  */
  function searchFunction() {
      let input = document.getElementById("input").value.toUpperCase();
      let table = document.getElementById("table");
      let tr = table.getElementsByTagName("tr");
  
      for (let i = 1; i < tr.length; i++) {
          let td = tr[i].getElementsByTagName("td")[0]; // Search by team name
          if (td) {
              let txtValue = td.textContent || td.innerText;
              tr[i].style.display = txtValue.toUpperCase().indexOf(input) > -1 ? "" : "none";
          }
      }
  }

// function for tabs
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  window.onload = function () {
    document.getElementById("defaultOpen").click();
};