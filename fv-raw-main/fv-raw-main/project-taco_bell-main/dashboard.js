const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));



darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

function toggleDropUp() {
  const dropUpMenu = document.getElementById('drop-up');
  const arrow = document.querySelector('.arrow-up');

  // Toggle the drop-up menu visibility
  dropUpMenu.classList.toggle('show');

  // Toggle the rotation of the arrow
  arrow.classList.toggle('arrow-up-rotate');
}

// Get elements
const modal = document.getElementById("quitModal");
const signOutBtn = document.getElementById("signOutBtn");
const closeBtn = document.querySelector(".close-btn");
const confirmQuit = document.getElementById("confirmQuit");
const cancelQuit = document.getElementById("cancelQuit");

// Open modal when "Sign Out" button is clicked
signOutBtn.onclick = function(event) {
  event.preventDefault(); // Prevent default link action
  modal.style.display = "flex"; // Show modal
}

// Close modal when the "x" (close) button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Confirm sign out action
confirmQuit.onclick = function() {
  // Perform the sign out action here, e.g., redirect to login page
  window.location.href = 'index.html'; // Example action
}

// Cancel quit action (hide the modal)
cancelQuit.onclick = function() {
  modal.style.display = "none";
}

// Close modal if user clicks anywhere outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Select the navbar and edit profile section
const navbar = document.querySelector(".navbar");
const editProfileLink = document.getElementById('editProfileLink');
const editProfileSection = document.getElementById('editProfileSection');

// Toggle Edit Profile Section and Navbar Visibility
editProfileLink.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default action
  editProfileSection.style.display = "block"; // Show the Edit Profile section
  navbar.style.display = "none"; // Hide the navbar
});

// Add a cancel button if you want to return to previous state
const cancelEditProfileBtn = document.getElementById('cancelEditProfile');
cancelEditProfileBtn.addEventListener('click', function () {
  editProfileSection.style.display = "none"; // Hide the Edit Profile section
  navbar.style.display = "flex"; // Show the navbar again
});
const saveEditProfileBtn = document.getElementById('saveEditProfile');
saveEditProfileBtn.addEventListener('click', function () {
  // You can add any logic here to save the profile changes if needed
  
  editProfileSection.style.display = "none"; // Hide the Edit Profile section
  navbar.style.display = "flex"; // Show the navbar again
});

function previewImage(event) {
  const file = event.target.files[0]; // Get the selected file
  const reader = new FileReader(); // Create a FileReader object

  reader.onload = function (e) {
      const img = document.getElementById('profileImagePreview'); // Get the image element
      img.src = e.target.result; // Set the image source to the file data
  }

  if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
  }
}


// Function to preview the uploaded image
function previewImage(event) {
    const preview = document.getElementById('profileImagePreview');
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        preview.src = e.target.result; // Set the preview image source
    }
    reader.readAsDataURL(file);
}


// Function to toggle edit mode (enables/disables the input fields)
function toggleEditMode() {
  const usernameField = document.getElementById('username');
  const professorField = document.getElementById('professor');
  const departmentField = document.getElementById('department');

  // Toggle the disabled property
  usernameField.disabled = !usernameField.disabled;
  professorField.disabled = !professorField.disabled;
  departmentField.disabled = !departmentField.disabled;
}

function toggleEditing() {
  const editButton = document.getElementById('editButton');
  const inputs = document.querySelectorAll('.modal-input2');
  const genderOptions = document.querySelector('.gender-options');
  const selectedGenderDiv = document.getElementById('selectedGender');
  const message = document.getElementById('message');

  const isEditing = editButton.textContent === 'Save';

  if (isEditing) {
    // Save data to local storage
    inputs.forEach(input => {
      localStorage.setItem(input.id, input.value);
      input.disabled = true;
      input.classList.remove('editing');
    });

    // Save selected gender
    const selectedGender = genderOptions.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
      selectedGenderDiv.textContent = selectedGender.value; // Display selected gender only
      selectedGenderDiv.style.display = 'block';
    } else {
      selectedGenderDiv.style.display = 'none';
    }

    genderOptions.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.disabled = true; // Disable radio buttons
    });
    genderOptions.classList.add('hidden');

    editButton.textContent = 'Edit';
   
  } else {
    // Enable input fields for editing
    inputs.forEach(input => {
      input.value = localStorage.getItem(input.id) || ''; // Load saved value
      input.disabled = false; // Enable input fields
      input.classList.add('editing');
      input.style.border = '1px solid #ccc';
    });

    // Clear previously selected gender
    selectedGenderDiv.style.display = 'none'; // Hide selected gender display
    genderOptions.classList.remove('hidden'); // Show gender options for editing
    genderOptions.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false; // Clear radio selection
      radio.disabled = false; // Enable radio buttons for editing
    });

    editButton.textContent = 'Save';
    message.textContent = '';
  }
}


function toggleEditing1() {
  const editButton = document.getElementById('editButton1');
  const inputs = document.querySelectorAll('.modal-input1');
  const uploadContainer = document.querySelector('.upload-container'); // Select the upload container
  const isEditing = editButton.textContent === 'Save';

  if (isEditing) {
      // Save data to local storage or perform necessary actions
      inputs.forEach(input => {
          input.disabled = true; // Disable input fields
          input.classList.remove('editing'); // Remove editing class
          localStorage.setItem(input.id, input.value); // Store value
      });

      // Hide the upload container smoothly
      uploadContainer.classList.remove('visible'); // Remove visible class
      uploadContainer.style.height = '0'; // Collapse height

      editButton.textContent = 'Edit'; // Change button text to Edit
  } else {
      // Enable input fields for editing
      inputs.forEach(input => {
          input.value = localStorage.getItem(input.id) || ''; // Load saved value
          input.disabled = false; // Enable input fields
          input.classList.add('editing'); // Add editing class for styling
      });

      // Show the upload container smoothly
      uploadContainer.style.height = 'auto'; // Set height to auto for transition
      void uploadContainer.offsetHeight; // This forces a reflow
      uploadContainer.classList.add('visible'); // Add visible class for opacity transition

      editButton.textContent = 'Save'; // Change button text to Save
  }
}
function saveChanges() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const department = document.getElementById('department').value;
  const title = document.getElementById('title').value;
  const navbar = document.querySelector(".navbar");

  // Perform validation (check if fields are not empty, valid email format, etc.)

  // Save data (for example, send it to the backend or save it in local storage)
  // Example for local storage:
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('department', department);
  localStorage.setItem('title', title);

  // Hide the edit profile section
  document.getElementById('editProfileSection').style.display = "none";

  // Show the overview section (assuming it has an ID of "overviewSection")
  document.getElementById('overviewSection').style.display = "block";

  // Optionally disable inputs again after saving
  toggleEditing();
}

// Attach the saveChanges function to the Save button
document.getElementById('saveEditProfile').onclick = saveChanges;
 

// Optional: Attach a function to the cancel button
document.getElementById('cancelEditProfile').onclick = function() {
  document.getElementById('editProfileSection').style.display = "none";
  document.getElementById('overviewSection').style.display = "block";
   // Navigate to overview
};

