function clickhere() {
  let message = document.getElementById("b").value;
  if (message == "employee") {
    alert("Hello");
  } else if (message == "director") {
    alert("Greetings");
  } else if (message == "") {
    alert("No login");
  }
}
