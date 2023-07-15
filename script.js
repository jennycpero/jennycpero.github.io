/* Alternate hero header text between Data Analytics,  Technical Writing, Data Visaulization, and UX Writing. */
const heroTexts = ["Data Analytics", "Technical Writing", "UX Writing", "Web Development"];
let counter = 0;

setInterval(change, 3500);

function change() {
  document.getElementById("hero-header").setAttribute("class", "text-fade"); 

  setTimeout(() => {
    document.getElementById("hero-header").textContent = heroTexts[counter];
    document.getElementById("hero-header").setAttribute("class", "text-show");
  }, 500)

  counter++;

  if (counter >= heroTexts.length) {
    counter = 0;
  }
}

$(".proj-cat").click(function() {
  $projcat = $(this);
    $projects = $projcat.next();
    $projects.slideToggle();
    document.getElementsByClassName("all-projects").setAttribute("display","flex");
  });
