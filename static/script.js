document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const reg1Btn = document.querySelector('.reg1');
    const reg2Btn = document.querySelector('.reg2');
    const reg3Btn = document.querySelector('.reg3');
    const avsBtn = document.querySelector('.AvS');
    const ivsBtn = document.querySelector('.IvS');

    // Get image elements
    const reg1Image = document.querySelector('.reg1-image');
    const reg2Image = document.querySelector('.reg2-image');
    const reg3Image = document.querySelector('.reg3-image');
    const avsImage = document.querySelector('.AvS-image');
    const ivsImage = document.querySelector('.IvS-image');

    // Function to toggle image display on button click
    function toggleImage(imageElement, imagePath) {
        if (imageElement.style.display === "block") {
            imageElement.style.display = "none"; // Collapse image
        } else {
            imageElement.src = imagePath; // Set image source if not already set
            imageElement.style.display = "block"; // Show image
        }
    }

    // Add click event listeners to buttons
    reg1Btn.addEventListener('click', () => toggleImage(reg1Image, '/static/images/region1.png'));
    reg2Btn.addEventListener('click', () => toggleImage(reg2Image, '/static/images/region2.png'));
    reg3Btn.addEventListener('click', () => toggleImage(reg3Image, '/static/images/region3.png'));
    avsBtn.addEventListener('click', () => toggleImage(avsImage, '/static/images/AvS.png'));
    ivsBtn.addEventListener('click', () => toggleImage(ivsImage, '/static/images/IvS.png'));
});
