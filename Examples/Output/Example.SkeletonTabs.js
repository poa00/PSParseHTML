(function(){function n(){var n=[].slice.call(document.querySelectorAll("ul.tab-nav li a.buttonTab"));n.map(function(n){n.addEventListener("click",function(){document.querySelector("li a.active.buttonTab").classList.remove("active");n.classList.add("active");document.querySelector(".tab-pane.active").classList.remove("active");document.querySelector(n.getAttribute("href")).classList.add("active")})})}document.readyState!=="loading"?n():document.addEventListener("DOMContentLoaded",n)})()