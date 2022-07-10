/*==================== MODALS ====================*/
const shopModal = document.getElementById("shop__modal");
const blogModal = document.getElementById("blog__modal");
const newsletterModal = document.getElementById("newsletter__modal");

/*==================== BUTTONS ====================*/
const shopModalBtns = document.querySelectorAll("#shop__modal__button");
const blogModalBtns = document.querySelectorAll("#blog__modal__button");
const newsletterModalBtn = document.getElementById("newsletter__modal__button");

const closeModalBtn = document.getElementById("close__modal");

/*==================== FUNCTIONS ====================*/

let openModal = function (modal) {
  modal.classList.add("active-modal");
};

let closeModal = function (modal) {
  modal.classList.remove("active-modal");
};

/*==================== SHOP MODAL ====================*/
shopModalBtns.forEach((shopModalBtn) => {
  shopModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(shopModal);
  });
});

blogModalBtns.forEach((shopModalBtn) => {
  shopModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(shopModal);
  });
});

/*==================== CLOSING MODALS ====================*/
//Close by clicking on the X button
closeModalBtn.addEventListener("click", () => {
  console.log("dsgasd");
  closeModal(shopModal);
  closeModal(blogModal);
  closeModal(newsletterModal);
});
//Close by clicking anywhere outside of the modal
window.addEventListener("click", (event) => {
  if (event.target == shopModal) {
    closeModal(shopModal);
  }
});

//add event listener for X (close button)
// closeModalBtn.forEach((closeModalBtn) => {
//     closeModalBtn.addEventListener("click", () => {
//       //closing any visible modal
//       console.log('dsgasd')
//       closeModal(shopModal);
//       closeModal(blogModal);
//       closeModal(newsletterModal);
//     });
//   });
