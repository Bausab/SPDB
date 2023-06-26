document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var bio = document.getElementById('bio').value;
    var avatar = document.getElementById('avatar').value;
  
    // Perform further processing or send the form data to the server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Bio:", bio);
    console.log("Avatar:", avatar);
  
    // Reset the form
    document.getElementById('profileForm').reset();
  });
  