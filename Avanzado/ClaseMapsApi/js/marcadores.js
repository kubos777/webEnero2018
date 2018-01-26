function initMap() {
  var mexico = {lat: 19.25, lng: -99.08};
  
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 4,
    center: mexico
  });

   var marcadorMexico = new google.maps.Marker({
    position: mexico,
    map: map,
    title: 'CDMX',
    animation: google.maps.Animation.DROP
  });

  var info = 
      '<div>'+
        '<h1>CDMX</h1>'+
        '<div>'+
          '<p><b>La Ciudad de Méxio</b>, La Ciudad de México, anteriormente conocida como Distrito Federal,nota 1 es una entidad federativa mexicana,16 17 18 considerada la capital del país.19 Se encuentra en el valle de México a una altitud media de 2240 metros.</p>'+
          '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">Más información.</a>'+     
        '</div>'+
      '</div>'
  var ventana = new google.maps.InfoWindow({
    content: info
  });

  marcadorMexico.addListener('click', function() {
    ventana.open(map, marcadorMexico)
  });

}