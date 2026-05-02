const searchInput = document.getElementById('search-input');
const searchListItems = document.querySelectorAll('#search-list li');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim().toLowerCase();

    searchListItems.forEach((item) => {
        const itemText = item.textContent.toLowerCase();
        const isVisible = itemText.includes(searchText);

        item.style.display = isVisible ? 'list-item' : 'none';
    });
});