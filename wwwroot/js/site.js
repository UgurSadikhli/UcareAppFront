function initializeMap(latitude, longitude, name) {
    var map = L.map('map').setView([latitude, longitude], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; UcareApp'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(name)
        .openPopup();
}
