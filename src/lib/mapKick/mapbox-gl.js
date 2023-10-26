(function() {
  var script = document.createElement('script');
  script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js';
  document.head.appendChild(script);

  script.onload = function() {
    // Carga el código de Mapbox Kick
    var script = document.createElement('script');
    script.src = './mapkick.js';
    document.head.appendChild(script);

    // Establece el token de acceso de Mapbox
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
  };
})();