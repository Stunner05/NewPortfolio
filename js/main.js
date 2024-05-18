const controlBtn = document.querySelectorAll(".controls")
const sections = document.querySelectorAll(".section")
const sectBtn = document.querySelectorAll(".control")
const allSections = document.querySelector(".main-content")


function pageControl() {
  for (let i = 0; i  < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn","");
      this.className += " active-btn";
    })
  }

  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  })

  


}

// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");
//   const themebtn = document.querySelector(".theme-btn");


// function pageControl() {
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         "active-btn",
//         ""
//       );
//       this.className += " active-btn";
//     });
//   }

//   allSections.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     if (id) {
//       sectBtns.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       e.target.classList.add("active");

//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });

//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });

// themebtn.addEventListener("click", () => {
//   let element = document.body;
//   element.classList.toggle('light-mode')
// })
// }

pageControl();
