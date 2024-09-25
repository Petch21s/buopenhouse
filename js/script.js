const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const backgroundImage = document.getElementById('backgroundImage');
const imageText = document.getElementById('imageText');

// ดึงเอา dots มาใช้
const dots = document.querySelectorAll('.dot');

const images = [
  {
    src: 'images/bupic2.png',
    text: `
      <ul class="list-unstyled">
        <li class="text-size-medium font-roboto">BU</li>
        <li class="text-size-medium font-inter">Openhouse</li>
        <li class="text-size-small font-inter">Start now</li>
      </ul>
    `
  },
  {
    src: 'images/bupic1.jpg',
    text: `
      <ul class="list-unstyled">
        <li class="text-size-medium font-roboto">Step into a world  </li>
        <li class="text-size-medium font-inter">A world</li>
        <li class="text-size-small font-inter">Of possibilities!</li>
      </ul>
    `
  },
  {
    src: 'images/bupic3.jpg',
    text: `
      <ul class="list-unstyled">
        <li class="text-size-medium font-roboto">Join the Exciting</li>
        <li class="text-size-medium font-inter">Certificate </li>
        <li class="text-size-small font-inter">Hunt!</li>
      </ul>
    `
  }
];

let currentIndex = 0;

function updateImage() {
  // เปลี่ยนรูปพื้นหลัง
  backgroundImage.src = images[currentIndex].src;

  // เปลี่ยนข้อความของ imageText
  imageText.innerHTML = images[currentIndex].text;

  // อัปเดต dots ให้ active dot ปัจจุบัน
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}


leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateImage();
});


rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; 
  updateImage();
});


updateImage();


window.addEventListener('resize', function() {
    const navList = document.getElementById('navList');
    const width = window.innerWidth;

    if (width <= 576) { // Mobile devices
        navList.style.fontSize = '0.8rem'; // Reduce font size
        navList.style.marginLeft = '0'; // Align to left
    } else if (width <= 768) { // Tablets
        navList.style.fontSize = '0.9rem'; // Slightly reduce font size
        navList.style.marginLeft = '0'; // Align to left
    } else { // Desktop
        navList.style.fontSize = '1rem'; // Original font size
        navList.style.marginLeft = '15px'; // Keep some spacing
    }
});

// Call resize to set initial sizes
window.dispatchEvent(new Event('resize'));



