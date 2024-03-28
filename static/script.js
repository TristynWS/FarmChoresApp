let currentAnimalIndex = 0;
const animalImages = ['bones_head.jpg', 'ethel_head.jpg']; // images' URLs or paths here

function addChore(event) {
    const input = event.target.previousElementSibling; // Assuming input is directly before the button in your HTML
    const list = input.nextElementSibling; // Assuming list is directly after the input in your HTML

    const newItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // code to handle checkbox behavior

    const label = document.createElement('label');
    label.style.display = 'block'; // Make label behave like a block for background image
    label.style.backgroundImage = `url(${animalImages[currentAnimalIndex]})`;
    label.style.backgroundRepeat = 'no-repeat';
    label.style.backgroundSize = '30px 30px';
    label.style.paddingLeft = '40px'; // Adjust padding to not overlap the text with the image

    document.getElementById('addListButton').addEventListener('click', function () {
        const newList = document.createElement('div');
        newList.innerHTML = `
            <input type="text" placeholder="Enter a new chore...">
            <button onclick="addChore(this)">Add Chore</button>
            <ul class="choreList"></ul>
        `;
        newList.classList.add('checklist');
        document.getElementById('listsContainer').appendChild(newList);
    });


    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    list.appendChild(newItem);

    // Cycle through images
    currentAnimalIndex = (currentAnimalIndex + 1) % animalImages.length;

    input.value = ''; // Clear the input field
}
