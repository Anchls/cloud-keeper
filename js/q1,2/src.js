document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const errorMessage = document.getElementById("errorMessage");
    
    if (!name || age < 18) {
        errorMessage.textContent = "Please enter your name and ensure your age is 18 or older.";
    } else {
       errorMessage.textContent = ""; 
      alert("Form submitted successfully!");
        }

});
  

const colorBox = document.getElementById("colorBox");

const originalColor = colorBox.style.backgroundColor;

colorBox.addEventListener("mouseover", function() {
  colorBox.style.backgroundColor = "yellow"; 
});

colorBox.addEventListener("mouseout", function() {
  colorBox.style.backgroundColor = originalColor; 
});
