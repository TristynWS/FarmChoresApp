let choreCounter = 0;
const animalImages = [/* URLs or paths to pet images */];

function addChore() {
    const input = document.getElementById('choreInput');
    const list = document.getElementById('choreList');
    const newItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'chore-' + choreCounter;
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            label.style.textDecoration = 'line-through';
            label.classList.add('completed-animation');
        } else {
            label.style.textDecoration = 'none';
            label.classList.remove('completed-animation');
        }
    });

    document.getElementById('addListBtn').addEventListener('click', function () {
        const newList = document.createElement('div');
        newList.innerHTML = `
            <input type="text" class="choreInput" placeholder="Enter a new chore...">
            <ul class="choreList"></ul>
        `;
        document.getElementById('listsContainer').appendChild(newList);

        // Bind a click event to the input's sibling (assumed to be a button here) to add chores
        newList.querySelector('.choreInput').nextElementSibling.addEventListener('click', addChore);
    });

    const label = document.createElement('label');
    label.htmlFor = 'chore-' + choreCounter;
    label.textContent = input.value;
    label.style.backgroundImage = `url('${animalImages[choreCounter % animalImages.length]}')`;
    label.className = 'chore-label';

    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    list.appendChild(newItem);

    choreCounter++;
    input.value = ''; // clear the input
}