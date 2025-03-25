function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Existing toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// New functions for image popup
function openImagePopup(imageSrc, altText) {
  const popup = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popupImage");
  
  popupImage.src = imageSrc;
  popupImage.alt = altText;
  
  popup.classList.add("active");
  
  // Prevent scrolling when popup is open
  document.body.style.overflow = "hidden";
  
  // Close popup when clicking outside the image
  popup.addEventListener("click", function(event) {
    if (event.target === popup) {
      closeImagePopup();
    }
  });
  
  // Add keyboard support (Escape key to close)
  document.addEventListener("keydown", handleKeyDown);
}

function closeImagePopup() {
  const popup = document.getElementById("imagePopup");
  popup.classList.remove("active");
  
  // Restore scrolling
  document.body.style.overflow = "auto";
  
  // Remove keyboard event listener
  document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeImagePopup();
  }
}

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add event listeners for project images
  const projectImages = document.querySelectorAll(".project-img");
  projectImages.forEach(image => {
    image.addEventListener("click", function() {
      openImagePopup(this.src, this.alt);
    });
  });
});
