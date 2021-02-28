const links = [
  {
      label: "Week 01: Local Storage and Mobil UX Design",
      url: "week1/index.html"
  },
  {
      label: "Week 02: Arrays, Logic, Loops, and Functions",
      url: "#"
  },
  {
    label: "Week 03: Objects, DOM, and Events",
    url: "#"
},
{
  label: "Week 04: Forms, OOP and, Modular Javascript",
  url: "week4/index.html"
},
{
  label: "Week 05: Debugging",
  url: "week5/index.html"
},
{
  label: "Week 06: Todo Challenge",
  url: "week6/to-do.html"
},
{
  label: "Week 07: Further Functions and Ajax",
  url: "week7/index.html"
},
{
  label: "Week 08: Todo Challenge",
  url: "week8/index.html"
},
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
