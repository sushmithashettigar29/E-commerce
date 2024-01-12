// serachForm = document.querySelector(".search-form");
// document.querySelector("#search-btn").onclick = () => {
//   serachForm.classList.toggle("active");
// };

window.onscroll = () => {
  if (window.scrollY > 80) {
    serachForm.classList.remove("active");
    document.querySelector(".header .header-2 .navbar").classList.add("active");
  } else {
    document
      .querySelector(".header .header-2 .navbar")
      .classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2 .navbar").classList.add("active");
  } else {
    document
      .querySelector(".header .header-2 .navbar")
      .classList.remove("active");
  }
};


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }