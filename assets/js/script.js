'use strict';

// function to toggle element visibility
const toggleElementVisibility = function(elem) { 
  elem.classList.toggle("active"); 
};

// sidebar variables
const sidebarElem = document.querySelector("[data-sidebar]");
const sidebarBtnElem = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtnElem.addEventListener("click", function () { 
  toggleElementVisibility(sidebarElem); 
});

// testimonials variables
const testimonialsItemElems = document.querySelectorAll("[data-testimonials-item]");
const modalContainerElem = document.querySelector("[data-modal-container]");
const modalCloseBtnElem = document.querySelector("[data-modal-close-btn]");
const overlayElem = document.querySelector("[data-overlay]");

// modal variables
const modalImgElem = document.querySelector("[data-modal-img]");
const modalTitleElem = document.querySelector("[data-modal-title]");
const modalTextElem = document.querySelector("[data-modal-text]");

// function to toggle modal visibility
const toggleTestimonialsModalVisibility = function () {
  modalContainerElem.classList.toggle("active");
  overlayElem.classList.toggle("active");
};

// add click event to all testimonials items
for (let i = 0; i < testimonialsItemElems.length; i++) {

  testimonialsItemElems[i].addEventListener("click", function () {

    modalImgElem.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImgElem.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitleElem.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalTextElem.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    toggleTestimonialsModalVisibility();

  });

}

// add click event to modal close button and overlay
modalCloseBtnElem.addEventListener("click", toggleTestimonialsModalVisibility);
overlayElem.addEventListener("click", toggleTestimonialsModalVisibility);

// custom select variables
const selectElem = document.querySelector("[data-select]");
const selectItemElems = document.querySelectorAll("[data-select-item]");
const selectValueElem = document.querySelector("[data-select-value]");
const filterBtnElems = document.querySelectorAll("[data-filter-btn]");

// function to filter items
const filterItems = function(selectedValue) {

  for (let i = 0; i < filterItemElems.length; i++) {

    if (selectedValue === "all") {
      filterItemElems[i].classList.add("active");
    } else if (selectedValue === filterItemElems[i].dataset.category) {
      filterItemElems[i].classList.add("active");
    } else {
      filterItemElems[i].classList.remove("active");
    }

  }

};

// function to handle select click event
const handleSelectClick = function() {
  toggleElementVisibility(selectElem);
};

// add event listener to select element
selectElem.addEventListener("click", handleSelectClick);

// add event listener to all select items
for (let i = 0; i < selectItemElems.length; i++) {
  selectItemElems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValueElem.innerText = this.innerText;
    toggleElementVisibility(selectElem);
    filterItems(selectedValue);

  });
}

// filter variables
const filterItemElems = document.querySelectorAll("[data-filter-item]");

// add event listener to all filter button items for large screen
let lastClickedFilterBtn = filterBtnElems[0];

for (let i = 0; i < filterBtnElems.length; i++) {

  filterBtnElems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValueElem.innerText = this.innerText;
    filterItems(selectedValue);

    lastClickedFilterBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedFilterBtn = this;

  });

}

// contact form variables
const formElem = document.querySelector("[data-form]");
const formInputElems = document.querySelectorAll("[data-form-input]");
const formBtnElem = document.querySelector("[data-form-btn]");

// function to handle form input event
const handleFormInput = function () {

  // check form validation
  if (formElem.checkValidity()) {
    formBtnElem.removeAttribute("disabled");
  } else {
    formBtnElem.setAttribute("disabled", "");
  }

};

// add event listener to all form input fields
for (let i = 0; i < formInputElems.length; i++) {
  formInputElems[i].addEventListener("input", handleFormInput);
}

// page navigation variables
const navigationLinkElems = document.querySelectorAll("[data-nav-link]");
const pageElems = document.querySelectorAll("[data-page]");

// function to handle navigation link click event
const handleNavLinkClick = function () {

  for (let i = 0; i < pageElems.length; i++) {

    if (this.innerHTML.toLowerCase() === pageElems[i].dataset.page) {
      pageElems[i].classList.add("active");
      navigationLinkElems[i].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pageElems[i].classList.remove("active");
      navigationLinkElems[i].classList.remove("active");
    }
  }

};

// add event listener to all navigation links
for (let i = 0; i < navigationLinkElems.length; i++) {
  navigationLinkElems[i].addEventListener("click", handleNavLinkClick);
}