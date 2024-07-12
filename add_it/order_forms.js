const formSelector = document.getElementById('form_selector');
const adBookForm = document.getElementById('form_page_book');
const adPeppolForm = document.getElementById('json_ad_pepol');

formSelector.addEventListener('change', function() {
  if (this.value === 'form_page_book') {
    adBookForm.style.display = 'block';
    adPeppolForm.style.display = 'none';
  } else if (this.value === 'json_ad_pepol') {
    adBookForm.style.display = 'none';
    adPeppolForm.style.display = 'block';
  }
});
