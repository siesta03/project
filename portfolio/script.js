// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to animate sections dynamically
function animateSection(elements, animationName, duration) {
    let currentIndex = 0;

    function animate() {
        elements.forEach((element) => {
            element.style.animation = 'none'; // Reset animation
        });

        const element = elements[currentIndex];
        element.style.animation = `${animationName} ${duration}s ease-in-out`;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % elements.length;
            animate();
        }, duration * 1000);
    }

    animate();
}

// Apply animations to respective sections
const aboutBoxes = document.querySelectorAll('.about-box');
const skillsBoxes = document.querySelectorAll('.skills-box');
const projectCards = document.querySelectorAll('.project-card');

// About and Projects use the same animation
animateSection(aboutBoxes, 'box-hover-animation', 1.5);
animateSection(projectCards, 'box-hover-animation', 1.5);

// Skills section uses its own animation
animateSection(skillsBoxes, 'subtle-scale-animation', 1.5);


 // Function to open the modal and set the image source
document.querySelectorAll('.enlarge-image').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        
        // Set the modal image source
        modalImage.src = this.src;

        // Show the modal by adding a class to make it visible
        modal.classList.add('show');  // Bootstrap 'show' class to display the modal
        modal.style.display = 'flex'; // Ensure modal is visible
    });
});

// Close modal functionality
const closeModalButton = document.querySelector('[data-bs-dismiss="modal"]');
closeModalButton.addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    // Clear the modal image source
    modalImage.src = '';

    // Hide the modal
    modal.classList.remove('show');
    modal.style.display = 'none';
});

// Close modal when clicking outside the image (on the backdrop)
const imageModal = document.getElementById('imageModal');
imageModal.addEventListener('click', function (e) {
    if (e.target === imageModal) {  // Check if backdrop is clicked (not the image)
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        // Clear the modal image source
        modalImage.src = '';

        // Hide the modal
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Attach event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting and reloading

        // Your submission logic here
        console.log("Form submitted successfully!");

        // Reset form (optional)
        form.reset();
    });
});

 document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for reaching out! Your message has been sent successfully.");
            form.reset();
        });
    });






