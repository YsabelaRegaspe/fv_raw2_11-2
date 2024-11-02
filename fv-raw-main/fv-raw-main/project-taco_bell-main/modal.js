// Get elements
const openNewModal = document.getElementById('openNewModal');
const newModal = document.getElementById('newModal');
const closeBtnNew = document.querySelector('.close-btn-new'); // Updated selector
const saveNewItem = document.getElementById('saveNewItem');
const cancelNewItem = document.getElementById('cancelNewItem');

// Open modal
openNewModal.addEventListener('click', () => {
  newModal.style.display = 'flex'; // or 'block' depending on your CSS
});

// Close modal when 'X' button is clicked
closeBtnNew.addEventListener('click', () => {
  newModal.style.display = 'none';
});

// Save new item and close modal
saveNewItem.addEventListener('click', () => {
  console.log('New item saved!');
  newModal.style.display = 'none';
});

// Cancel new item and close modal
cancelNewItem.addEventListener('click', () => {
  newModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === newModal) {
    newModal.style.display = 'none';
  }
});

const fileInput = document.getElementById('fileInput');
const fileChosenText = document.querySelector('.file-chosen-text');

fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        fileChosenText.textContent = this.files[0].name; // Update the text with the chosen file name
    } else {
        fileChosenText.textContent = 'No file chosen'; // Reset the text if no file is chosen
    }
});

