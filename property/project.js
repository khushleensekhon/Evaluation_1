document.getElementById('searchButton').addEventListener('click', function() {
  var searchInput = document.getElementById('searchInput').value;
  document.getElementById('searchResult').innerText = 'Searching for: ' + searchInput;
});

// Show the popular residence section when "Discover More" is clicked
document.querySelectorAll('#discoverMoreButton').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('popularResidenceSection').classList.remove('d-none');
    window.scrollTo({
      top: document.getElementById('popularResidenceSection').offsetTop,
      behavior: 'smooth'
    });
  });
});
document.querySelector('.exploreAll').addEventListener('click', function() {
  const residenceContainer = document.getElementById('residenceContainer');
  
  const additionalResidences = [
    {
      img: 'images/o1.jpg',
      location: 'Delhi, India',
      size: '2500 m2',
      bed: '4 Bed',
      dimension: '9 * 10',
      price: '25Cr'
    },
    {
      img: 'images/o2.jpg',
      location: 'Goa, India',
      size: '3200 m2',
      bed: '5 Bed',
      dimension: '10 * 10',
      price: '30Cr'
    },
    {
      img: 'images/o3.webp',
      location: 'Jaipur, India',
      size: '2800 m2',
      bed: '3 Bed',
      dimension: '7 * 7',
      price: '22Cr'
    },
    {
      img: 'images/o4.jpg',
      location: 'Kerala, India',
      size: '2600 m2',
      bed: '6 Bed',
      dimension: '8 * 9',
      price: '28Cr'
    },
    {
      img: 'images/o5.jpg',
      location: 'Pune, India',
      size: '3500 m2',
      bed: '5 Bed',
      dimension: '9 * 8',
      price: '32Cr'
    },
    {
      img: 'images/o6.jpg',
      location: 'Kolkata, India',
      size: '3000 m2',
      bed: '4 Bed',
      dimension: '8 * 9',
      price: '29Cr'
    },
    {
      img: 'images/o7.jpg',
      location: 'Hyderabad, India',
      size: '4000 m2',
      bed: '6 Bed',
      dimension: '10 * 10',
      price: '40Cr'
    },
    {
      img: 'images/o8.jpg',
      location: 'Ahmedabad, India',
      size: '2700 m2',
      bed: '3 Bed',
      dimension: '7 * 8',
      price: '23Cr'
    },
    {
      img: 'images/o9.jpg',
      location: 'Surat, India',
      size: '2900 m2',
      bed: '5 Bed',
      dimension: '8 * 8',
      price: '26Cr'
    },
    {
      img: 'images/o6.jpg',
      location: 'Bangalore, India',
      size: '3800 m2',
      bed: '6 Bed',
      dimension: '10 * 9',
      price: '35Cr'
    },
    {
      img: 'images/o11.jpg',
      location: 'Ahmedabad, India',
      size: '2700 m2',
      bed: '3 Bed',
      dimension: '7 * 8',
      price: '23Cr'
    },
    {
      img: 'images/o12.jpg',
      location: 'Ahmedabad, India',
      size: '2700 m2',
      bed: '3 Bed',
      dimension: '7 * 8',
      price: '23Cr'
    },
   
  ];

  additionalResidences.forEach(residence => {
    const residenceCard = `
      <div class="col">
        <div class="card border-0 rounded-0">
          <img src="${residence.img}" class="card-img-top rounded-0" alt="${residence.location}">
          <div class="card-body">
            <p class="card-text">${residence.location}</p>
            <div class="d-flex justify-content-center mt-3">
              <p class="mx-4 card-text "><i class="fa fa-car"></i>&nbsp ${residence.bed}</p>
              <p class="mx-4 card-text "><i class="fa fa-play"></i>&nbsp ${residence.dimension}</p>
              <p class="mx-4 card-text "><i class="fa fa-compass"></i>&nbsp ${residence.size}</p>
            </div>
            <div class="d-flex my-2">
               <a href="form.html" class="btn btn-lg text-white btn-dark px-4 rounded-0">Book Now</a>
              <h5 class="my-auto ms-auto ">${residence.price}</h5>
            </div>
          </div>
        </div>
      </div>
    `;
    residenceContainer.insertAdjacentHTML('beforeend', residenceCard);
  });
  
  // Optionally hide "Explore All" after clicking
  this.style.display = 'none';
});

let currentSection = 1;
const reviewSection1 = document.getElementById('reviewSection1');
const reviewSection2 = document.getElementById('reviewSection2');

// Show next set of reviews
document.getElementById('nextArrow').addEventListener('click', function() {
  if (currentSection === 1) {
    reviewSection1.classList.add('d-none');
    reviewSection2.classList.remove('d-none');
    currentSection = 2;
  }
});

// Show previous set of reviews
document.getElementById('prevArrow').addEventListener('click', function() {
  if (currentSection === 2) {
    reviewSection2.classList.add('d-none');
    reviewSection1.classList.remove('d-none');
    currentSection = 1;
  }
});
function toggleText(button) {
  const extraText = button.previousElementSibling;
  if (extraText.classList.contains('d-none')) {
    extraText.classList.remove('d-none');
    button.textContent = 'Read Less';
  } else {
    extraText.classList.add('d-none');
    button.textContent = 'Read More';
  }
}