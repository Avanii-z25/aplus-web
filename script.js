document.getElementById("btn").onclick = function () {
  document.getElementById("out").textContent = "Hello, parent!";
};
var WA_NUMBER = "918879249224";

document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var text =
    "Demo class request\n" +
    "Parent: " + document.getElementById("parentName").value + "\n" +
    "Student: " + document.getElementById("studentName").value + "\n" +
    "Phone: " + document.getElementById("phone").value + "\n" +
    "Standard: " + document.getElementById("standard").value + "\n" +
    "Board: " + document.getElementById("board").value + "\n" +
    "Date: " + document.getElementById("demoDate").value + "\n" +
    "Time: " + document.getElementById("demoTime").value + "\n" +
    "Message: " + document.getElementById("message").value;

  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
});