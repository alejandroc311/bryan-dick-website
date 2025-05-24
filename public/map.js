"use strict";

function initMap() {
  const myLatLng = {
    lat: 18.419710159301758,
    lng: -66.06230163574219
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
  document.getElementById("get-directions").addEventListener("click", function() {
    const destination = encodeURIComponent(myLatLng.lat + "," + myLatLng.lng);
    const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(directionUrl, "_blank");
  });
}

