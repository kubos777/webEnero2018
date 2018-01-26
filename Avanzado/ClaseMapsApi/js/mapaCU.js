function initMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 12, //zoom inicial
    center: {lat: 19.40, lng: -99.13}, //ubicación inicial
    mapTypeId: google.maps.MapTypeId.TERRAIN //tipo de mapa
  });

  // Define coordenadas del polígono
  var coordenadas = [
    {lat: 19.336891, lng: -99.190470}, //Miami
    {lat: 19.335697, lng: -99.176343}, //Puerto Rico
    {lat: 19.326529, lng: -99.174257}, //Guatemala
    {lat: 19.316855, lng: -99.176269}, //México
    {lat: 19.309827, lng: -99.176314}, //México
    {lat: 19.311400, lng: -99.188013}, //México
    {lat: 19.320755, lng: -99.195108}, //México
    {lat: 19.333923, lng: -99.199532}, //México
  ];

  // Construyendo el polígono
  var miMapa = new google.maps.Polygon({
    paths: coordenadas,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });
  miMapa.setMap(map);
}

 

