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
                listItem.classList.add('completed'); // Make sure this matches your CSS
                listItem.classList.add('completed-animation'); // Triggers the animation
            } else {
                listItem.classList.remove('completed');
                listItem.classList.remove('completed-animation');
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
document.addEventListener('click', function (event) {
    // Check if the clicked element is an "Add Chore" button
    if (event.target && event.target.nodeName == "BUTTON" && event.target.textContent == "Add Chore") {
        addChore(event);
    }
});
