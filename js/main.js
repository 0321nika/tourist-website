"use strict";
// burger MENU
const mainMenu = document.querySelector(".lists");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", function () {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
});
closeMenu.addEventListener("click", function () {
  mainMenu.style.top = "-100vh";
});
//SLIDER
const myslide = document.querySelectorAll(".myslide");
let counter = 1;
slidefun(counter);

function plusSlides(n) {
  counter += n;
  slidefun(counter);
}
function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
}

//PROJECTARR
const modalContent = [
  {
    title: "FLIGHT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. ",
    image: "./images/assets/img1.png",
  },
  {
    title: "HOTEL & RESORT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: "./images/assets/img2.png",
  },
  {
    title: "FAMILY TRIP PLANNER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: "./images/assets/img3.png",
  },
  {
    title: "CRUISE TOUR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: "./images/assets/img4.png",
  },
  {
    title: "FIRE CAMP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: "./images/assets/img5.png",
  },
  {
    title: "CORPORATE HOLIDAYS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: "./images/assets/img6.png",
  },
];

const cardContainer = document.getElementById("card-container");

modalContent.map((content) => {

  const card = document.createElement("div");
  card.classList.add("img-side-links");

  const image = document.createElement("img");
  image.classList.add("card-image");
  image.src = content.image;

  const title = document.createElement("div");
  title.classList.add("card-title");
  title.textContent = content.title;

  const description = document.createElement("div");
  description.classList.add("card-description");
  description.textContent = content.description;

  card.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalImage.src = content.image;
    modalTitle.textContent = content.title;
    modalDescription.textContent = content.description;

    modal.style.display = "block";
  });

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);

  cardContainer.appendChild(card);
});

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



//validation
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const regex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  if (regex.test(email)) {
    form.submit();
    emailInput.classList.add("valid")
  } else {
    alert("Please enter a  Gmail address.");
    emailInput.classList.add("notValid")
  }
});

// scroll animation


const counters = document.querySelectorAll('.counter');
const options = {
  threshold: 1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = +target.getAttribute('data-target');
      const duration = 2000;
      const step = Math.floor(count / duration * 16); 

      let currentCount = 0;
      const counterAnimation = () => {
        if (currentCount < count) {
          currentCount += step;
          target.innerText = currentCount;
          requestAnimationFrame(counterAnimation);
        } else {
          target.innerText = count;
        }
      };

      counterAnimation();
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});