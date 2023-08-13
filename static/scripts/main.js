let darkModeCheckbox

function updateLocalStorage() {
  console.log(this.checked)
  if (this.checked) {
    localStorage.setItem('theme', 'cupcake');
    document.documentElement.setAttribute('data-theme', 'cupcake');
    console.log(document.documentElement.getAttribute('data-theme'))
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log(document.documentElement.getAttribute('data-theme'))
  }
}

document.addEventListener('DOMContentLoaded', function() {
  darkModeCheckbox = document.querySelectorAll('.darkModeCheckbox');

  darkModeCheckbox.forEach(el => {
    el.addEventListener('change', updateLocalStorage);
    if (localStorage.getItem('data-theme') == 'dark') {
      darkModeCheckbox.checked = true
    } else {
      darkModeCheckbox.checked = false
    }
  })

  // Set theme on page load based on localStorage value
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    darkModeCheckbox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    darkModeCheckbox.checked = false;
    document.documentElement.setAttribute('data-theme', 'cupcake');
  }

});
