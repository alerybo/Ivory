/*==================== MODALS ====================*/
const shopModal = document.getElementById("shop__modal");
const blogModal = document.getElementById("blog__modal");
const newsletterModal = document.getElementById("newsletter__modal");

/*==================== BUTTONS ====================*/
//Opening button
const openModalBtns = document.querySelectorAll("#modal__button");
//Closing button
const closeModalBtn = document.getElementById("close__modal");

/*==================== OPENING MODAL ====================*/
openModalBtns.forEach((shopModalBtn) => {
  shopModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(shopModal);
  });
});

let openModal = function (modal) {
  modal.classList.add("active-modal");
};

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

let closeModal = function (modal) {
  modal.classList.remove("active-modal");
};
