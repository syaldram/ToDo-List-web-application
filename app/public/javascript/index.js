// Get today's date
var today = new Date();

// Format the date
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = today.toLocaleDateString("en-US", options);

// Get the heading element
var heading = document.querySelector('.to-do-list .date-heading');

// Update the heading text
heading.textContent = formattedDate;

// Get all checkboxes
var checkboxes = document.querySelectorAll('.to-do-list .form-check-input');

// Add change event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    // Get the parent list item of the clicked checkbox
    var listItem = checkbox.closest('.list-group-item');

    // Get the task title and time
    var taskTitle = listItem.querySelector('.form-checked-content strong');
    var taskTime = listItem.querySelector('.form-checked-content .text-body-secondary');

    // Toggle line-through style
    if (checkbox.checked) {
      taskTitle.style.textDecoration = 'line-through';
      taskTime.style.textDecoration = 'line-through';
    } else {
      taskTitle.style.textDecoration = 'none';
      taskTime.style.textDecoration = 'none';
    }
  });
});

// Get all nav links
var navLinks = document.querySelectorAll('.nav-link');

// Remove 'active' class from all links
navLinks.forEach(link => {
  link.classList.remove('active');
});

// Get current path
var path = window.location.pathname;

// Add 'active' class to the link that matches the current path
navLinks.forEach(link => {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});