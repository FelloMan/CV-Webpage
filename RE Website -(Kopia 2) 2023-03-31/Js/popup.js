// get all the buttons that open the modals
const openButtons = document.querySelectorAll("[data-opens]");

// loop over the buttons
openButtons.forEach(function(btn) {
  // get the selector
  var modalSelector = btn.dataset.opens;

  btn.addEventListener("click", function() {
    document.querySelector(modalSelector).showModal();
  });
});

//get all the close buttons and attach events
// get all the buttons that open the modals
const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // find the parent that is a modal element and close it
    btn.closest('.modal').close();
  });
});









