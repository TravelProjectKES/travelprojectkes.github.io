// Image Modal
const modal = document.getElementById('gallery-modal');
const modalContent = document.querySelector('.gallery-modal-content');
const modalImage = document.querySelector('.gallery-modal-image');
const galleryImages = document.querySelectorAll('.gallery-images img');

// Open Modal with Clicked Image
function openModal(image) {
  modalImage.src = image.src;
  modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
}

// Add event listeners to images
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    openModal(image);
  });

  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.75s';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

