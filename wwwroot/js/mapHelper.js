function initializeMap2(latitude, longitude) {
    var map = L.map('map').setView([latitude, longitude], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; UcareApp'
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup("Selected Location")
        .openPopup();

    map.on('click', function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        marker.setLatLng([lat, lng]);
        marker.bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();

        // Save latitude and longitude to localStorage
        localStorage.setItem('mapLat', lat);
        localStorage.setItem('mapLng', lng);
    });
}
