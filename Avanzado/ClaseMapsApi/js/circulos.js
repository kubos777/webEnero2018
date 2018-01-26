// Ejemplos de circulos con la población de algunas ciudades

// Creando arreglo con las coordenadas de las ciudades y el número de habitantes
var citymap = {
  chicago: {
    center: {lat: 41.878, lng: -87.629},
    population: 2714856
  },
  newyork: {
    center: {lat: 40.714, lng: -74.005},
    population: 8405837
  },
  losangeles: {
    center: {lat: 34.052, lng: -118.243},
    population: 3957799
  },
  cdmx: {
    center: {lat: 19.25, lng: -99.08},
    population:   8918653
  }
};

function initMap() {
  // Creando el mapa
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 4,  //zoom inicial
    center: {lat: 37.090, lng: -95.712}, //Coordenadas iniciales
    mapTypeId: google.maps.MapTypeId.TERRAIN //Tipo de mapa
  });

  // Construyendo los circulos de las ciudades con un for each
  // El tamaño del ciculo de definira su población
  for (var city in citymap) {
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    });
    if(citymap[city].population<3000000){
      cityCircle.fillColor = "#00ff00"
      cityCircle.strokeColor = "#00ff00"
    }
    else if(citymap[city].population<8000000){
      cityCircle.fillColor = "#F5FE00"
      cityCircle.strokeColor = "#F5FE00"
    }
  }
}