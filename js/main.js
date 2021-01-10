const links = [
  {
      label: "Week 01:",
      url: "week1/index.html"
  },
  {
      label: "Week 02:",
      url: "#"
  }
];

var ol = document.querySelector("ol");

for (var i of links){
  var li = document.createElement("li");
  var urlLink = document.createElement("a");
  urlLink.setAttribute("href", i.url);
  urlLink.textContent = i.label;
  li.appendChild(urlLink);
  ol.appendChild(li);
}
