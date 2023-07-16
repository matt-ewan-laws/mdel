function updateLocalStorage() {
  console.log('test')
  if (darkModeCheckbox.checked) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem('theme', 'cupcake');
    document.documentElement.setAttribute('data-theme', 'cupcake');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const darkModeCheckbox = document.querySelectorAll('.darkModeCheckbox');

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
