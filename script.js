let medicines = [];

// Adding medicine details
document.getElementById('medicineForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('medicineName').value;
  const image = document.getElementById('medicineImage').value;
  const location = document.getElementById('medicineLocation').value;
  const price = parseFloat(document.getElementById('medicinePrice').value);

  // Store the medicine object
  medicines.push({ name, image, location, price });

  // Clear form after submission
  document.getElementById('medicineForm').reset();

  alert('Medicine added successfully!');
});

// Search for medicine by name and location, and sort by price
document.getElementById('searchInput').addEventListener('input', filterMedicines);
document.getElementById('locationInput').addEventListener('input', filterMedicines);

function filterMedicines() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const locationQuery = document.getElementById('locationInput').value.toLowerCase();
  const resultsContainer = document.getElementById('medicineResults');
  
  // Clear previous results
  resultsContainer.innerHTML = '';

  // Filter and sort medicines by location and price
  medicines
    .filter(medicine => 
      medicine.name.toLowerCase().includes(query) && 
      medicine.location.toLowerCase().includes(locationQuery)
    )
    .sort((a, b) => a.price - b.price)  // Sort by price (low to high)
    .forEach(medicine => {
      const card = document.createElement('div');
      card.className = 'medicine-card';
      
      card.innerHTML = `
        <img src="${medicine.image}" alt="${medicine.name}">
        <h3>${medicine.name}</h3>
        <p>City: ${medicine.location}</p>
        <p>Price: $${medicine.price}</p>
      `;
      
      resultsContainer.appendChild(card);
    });
}
