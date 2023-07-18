document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const images = gallery.getElementsByTagName('img');
    let currentIndex = 0;
    const miniBar = document.querySelector('.mini-bar');
    const menuButton = document.querySelector('.menu-button');
  
    // Function to show the current image
    function showCurrentImage() {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = i === currentIndex ? 'block' : 'none';
      }
    }
  
    // Function to go to a specific image
    function goToImage(index) {
      currentIndex = index;
      showCurrentImage();
    }
  
    // Function to go to the previous image
    function goToPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showCurrentImage();
    }
  
    // Function to go to the next image
    function goToNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showCurrentImage();
    }
  
    // Toggle mini bar visibility
    function toggleMiniBar() {
      miniBar.classList.toggle('open');
    }
  
    // Create mini bar with image thumbnails
    for (let i = 0; i < images.length; i++) {
      const thumbnail = document.createElement('img');
      thumbnail.src = images[i].src;
      thumbnail.addEventListener('click', () => goToImage(i));
      miniBar.appendChild(thumbnail);
    }
  
    // Show the initial image
    showCurrentImage();
  
    // Event listeners for navigation buttons
    prevButton.addEventListener('click', goToPrevImage);
    nextButton.addEventListener('click', goToNextImage);
  
    // Event listener for menu button
    menuButton.addEventListener('click', toggleMiniBar);
  });
  