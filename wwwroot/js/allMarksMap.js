window.initializeMap4 = (latitude, longitude, places) => {

    if (!window.myMap) {
        console.log("Initializing map.");
        window.myMap = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(window.myMap);
    }

    if (window.markers) {
        window.markers.forEach(marker => window.myMap.removeLayer(marker));
    }
    window.markers = [];

    places.forEach(place => {
        console.log(`Adding custom icon for place: ${place.name} at [${place.latitude}, ${place.longitude}]`);

        let customIcon = L.icon({
            iconUrl: place.imgPath, 
            iconSize: [60, 60], 
            iconAnchor: [30, 40], 
            popupAnchor: [0, -40] 
        });

        let marker = L.marker([place.latitude, place.longitude], { icon: customIcon }).addTo(window.myMap);
        marker.bindPopup(`<b><a href='#' onclick="window.navigateTo('${place.id}')">${place.name}</a></b>`).openPopup();
        window.markers.push(marker);
    });

    if (places.length > 1) {
        let group = new L.featureGroup(window.markers);
        window.myMap.fitBounds(group.getBounds());
    }
};


window.navigateTo = (id) => {
    window.location.href = `/card/${id}`;
};