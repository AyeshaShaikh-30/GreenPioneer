const organizations = [
    { name: "EcoRecycle Center", location: "Pune", plastics: "Type 2, Type 4, Type 5", address: "123 Eco Street, Pune", contact: "123-456-7890" },
    { name: "Green Planet Recycling", location: "Mumbai", plastics: "Type 1, Type 3", address: "456 Green Road, Mumbai", contact: "987-654-3210" },
    { name: "Clean Earth Initiative", location: "Delhi", plastics: "Type 2, Type 6, Type 8", address: "789 Earth Avenue, Delhi", contact: "456-789-0123" },
    { name: "Plastic Waste Solutions", location: "Bangalore", plastics: "Type 4, Type 7", address: "101 Plastic Lane, Bangalore", contact: "321-654-9870" },
    { name: "Eco Bricks Foundation", location: "Chennai", plastics: "Type 7", address: "202 Green Block, Chennai", contact: "654-321-0987" }, // Standardized Eco-bricks
    { name: "Green Earth Recycling", location: "Kolkata", plastics: "Type 1, Type 5, Type 7", address: "303 Nature Road, Kolkata", contact: "789-123-4560" },
];
function searchOrganizations() {
    const locationInput = document.getElementById('location-input').value.toLowerCase();
    const selectedPlastics = Array.from(
    document.querySelectorAll('#plastic-types input:checked')
).map(checkbox => checkbox.value);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results

    const filtered = organizations.filter(org => {
        const locationMatch = org.location.toLowerCase().includes(locationInput);
        const plasticMatch = selectedPlastics.length > 0
            ? selectedPlastics.some(plastic => org.plastics.toLowerCase().includes(plastic.toLowerCase()))
            : true;
        return locationMatch && plasticMatch;
    });

    if (filtered.length === 0) {
        resultsDiv.innerHTML = `<p>No organizations found.</p>`;
        return;
    }

    filtered.forEach(org => {
        const orgCard = `
            <div class="card">
                <h3>${org.name}</h3>
                <p>Location: ${org.location}</p>
                <p>Plastics Accepted: ${org.plastics}</p>
                <p>Address: ${org.address}</p>
                <p>Contact: ${org.contact}</p>
            </div>
        `;
        resultsDiv.innerHTML += orgCard;
    });
}

function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function clearResults() {
    document.getElementById('location-input').value = '';
    const checkboxes = document.querySelectorAll('#plastic-types input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.checked = false);

    document.getElementById('results').innerHTML = '';
}
