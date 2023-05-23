function searchGoogle(event) {
    event.preventDefault();
    const query = document.querySelector('.search-box').value;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
  }






