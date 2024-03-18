const colors = [
  //   "var(--dark-green)",
  "var(--light-green)",
  "var(--dark-sage)",
  "var(--lighter-brown)",
  "var(--light-brown)",
  "var(--dark-brown)",

  "var(--mustard)",
  "var(--sunset)",
  "var(--terracotta)",
  "var(--rust)",
  "var(--light-sage)",
  "var(--olive)",
];

var projects = [
  {
    name: "Dino Detectors",
  },
  {
    name: "Rattler's Unite",
  },
  {
    name: "eStore Database",
  },
  {
    name: "Sakura",
  },
];

var cardCarousel = document.getElementById("carousel");
var colorIterator = 0;

for (var project of projects) {
  var holder = document.createElement("div");
  holder.classList.add("holder");

  var card = document.createElement("div");
  card.classList.add("card");
  holder.appendChild(card);

  if (colorIterator >= colors.length) {
    colorIterator = 0;
  }
  card.style.backgroundColor = colors[colorIterator];
  holder.style.color = colors[colorIterator];
  colorIterator++;
  var nameTitle = document.createElement("p");
  nameTitle.textContent = project.name;

  holder.appendChild(nameTitle);
  //   var description = document.createElement("p");
  //   description.textContent = project.description;

  //   card.appendChild(nameTitle);
  //   card.appendChild(description);

  cardCarousel.appendChild(holder);
}

var headers = document.querySelectorAll(".aboutBox h2");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    // Toggle the visibility of the next sibling element (description)
    // const arrow = this.nextElementSibling;
    // arrow.classList.toggle("open");
    // const description = this.parentElement.nextElementSibling;
    const description = this.nextElementSibling;
    description.classList.toggle("hide");
    let expanders = this.querySelector(".expand");
    expanders.textContent = expanders.textContent === "+" ? "-" : "+";
  });
});
