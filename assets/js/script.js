'use strict';

// Toggle an element only when it exists.
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

// Mobile sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.setAttribute(
    "aria-expanded",
    String(sidebar.classList.contains("active"))
  );

  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
    sidebarBtn.setAttribute(
      "aria-expanded",
      String(sidebar.classList.contains("active"))
    );
  });
}

// Optional testimonial section
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    if (!modalContainer || !overlay || !modalImg || !modalTitle || !modalText) {
      return;
    }

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
overlay?.addEventListener("click", testimonialsModalFunc);

// Optional project filters
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === filterItems[i].dataset.category
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

select?.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn?.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Optional contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (!form || !formBtn) return;

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Match navigation buttons to their page names.
const navigationLinks = Array.from(
  document.querySelectorAll("[data-nav-link]")
);
const pages = Array.from(document.querySelectorAll("[data-page]"));

const navigationTarget = function (link) {
  return link.dataset.pageTarget || link.textContent.trim().toLowerCase();
};

const activatePage = function (pageName) {
  const target = pages.find(page => page.dataset.page === pageName);
  if (!target) return;

  pages.forEach(page => {
    const isActive = page === target;
    page.classList.toggle("active", isActive);
    page.hidden = !isActive;
  });

  navigationLinks.forEach(link => {
    const isActive = navigationTarget(link) === pageName;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

navigationLinks.forEach(link => {
  const target = pages.find(
    page => page.dataset.page === navigationTarget(link)
  );

  if (target) {
    if (!target.id) target.id = target.dataset.page;
    link.setAttribute("aria-controls", target.id);
  }

  link.addEventListener("click", function () {
    activatePage(navigationTarget(this));
    window.scrollTo(0, 0);
  });
});

const initialPage =
  pages.find(page => page.classList.contains("active")) || pages[0];

if (initialPage) activatePage(initialPage.dataset.page);
