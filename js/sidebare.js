
fetch("sidebar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sidebar-container").innerHTML = data;
  })
  .catch(error => {
    console.error("Sidebar load nahi hua:", error);
  });
