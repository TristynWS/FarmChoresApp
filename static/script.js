document.getElementById('addListButton').addEventListener('click', function () {
    const listsContainer = document.getElementById('listsContainer');
    const newList = document.createElement('div');
    newList.classList.add('checklist');
    newList.innerHTML = `
        <input type="text" placeholder="Enter a new chore..." class="choreInput">
        <button onclick="addChore(event)">Add Chore</button>
        <ul class="choreList"></ul>
    `;
    listsContainer.appendChild(newList);
});

let currentAnimalIndex = 0;
const animalImages = ['/static/images/Bones.png', '/static/images/ethel.png']; // Update paths as necessary

function addChore(event) {
    const button = event.target;
    const checklistDiv = button.closest('.checklist');
    const input = checklistDiv.querySelector('.choreInput');
    const list = checklistDiv.querySelector('.choreList');
    const choreText = input.value.trim();

    if (choreText) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });

        const label = document.createElement('label');
        label.textContent = choreText;
        label.style.backgroundImage = `url(${animalImages[currentAnimalIndex]})`;
        label.classList.add('chore-label'); // Ensure .chore-label CSS is applied

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        list.appendChild(listItem);

        // Cycle through the animal images
        currentAnimalIndex = (currentAnimalIndex + 1) % animalImages.length;
        input.value = ''; // Clear the input field after adding
    } else {
        alert('Please enter a chore!');
    }
}
