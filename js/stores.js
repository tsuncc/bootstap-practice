const storeData = [
  {
    name: "Sentinel",
    location: "1340 Sentinel Drive, New York, NY 10005",
    phone: "+1 212-555-1234",
    hours: "Monday to Friday, 9:00 AM - 7:00",
    specialties: "Offers expert advice and workshops on natural skincare and haircare routines.",
    image: "imgs/store-01.jpeg",
  },
  {
    name: "Garden Lane",
    location: "450 Garden Avenue, Portland, OR 97209",
    phone: "+1 503-555-7890",
    hours: "Daily, 8:00 AM - 8:00 PM",
    specialties: "Provides consultations and classes on making homemade natural personal care products from locally sourced ingredients.",
    image: "imgs/store-02.jpeg",
  },
  {
    name: "Ocean View",
    location: "1882 Ocean View Blvd, Santa Monica, CA 90401",
    phone: "+1 310-555-4567",
    hours: "Monday to Friday, 10:00 AM - 8:00 PM; Saturday, 10:00 AM - 5:00 PM",
    specialties: "Regularly hosts wellness events focusing on holistic health and natural beauty care.",
    image: "imgs/store-03.jpeg",
  },
];


function renderStores() {
  const storeList = document.getElementById('storeList');

  storeData.forEach(store => {
    const storeDiv = document.createElement('div');
    storeDiv.classList.add('col-24', 'd-flex', 'flex-column', 'flex-lg-row','align-items-center', 'mb-6');

    storeDiv.innerHTML = `
      <div class="col-24 col-lg-8 mb-4 mb-lg-0 p-0 order-2 order-lg-1">
        <img src="${store.image}" alt="Image of ${store.image}" class="rounded-3 w-100">
      </div> 

      <div class="col-24 col-lg-16 mb-4 mb-lg-0 p-0 ps-lg-6 order-1 order-lg-2">
        <h4 class="mb-3">${store.name}</h4>
        <ul>
          <ol><i class="fa-solid fa-location-dot me-3 mb-3 text-accent"></i>${store.location}</ol>
          <ol><i class="fa-solid fa-phone me-3 mb-3 text-accent"></i>+1 212-555-1234</ol>
          <ol><i class="fa-solid fa-clock me-3 text-accent"></i>${store.hours}</ol>
        </ul>

        <hr class="my-4">

        <p>${store.specialties}</p>
      </div> 
    `;

    storeList.appendChild(storeDiv);
  });
}

renderStores();


