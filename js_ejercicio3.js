const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const dynamicList = document.getElementById('dynamic-list');

function createListItem(text) {
    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    const removeButton = document.createElement('button');

    itemText.textContent = text;
    removeButton.textContent = 'Eliminar';

    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(removeButton);

    return listItem;
}

addItemButton.addEventListener('click', () => {
    const value = itemInput.value.trim();

    if (value === '') {
        return;
    }

    dynamicList.appendChild(createListItem(value));
    itemInput.value = '';
    itemInput.focus();
});