import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {

    const countryColors = {
        Russia: '#00FF00',
        China: '#0000FF',
        Iran: '#00FF00',
    };
  useEffect(() => {
    // Set up Mapbox GL JS
    mapboxgl.accessToken = "pk.eyJ1IjoiZGFubnlkaTEyIiwiYSI6ImNsbGVnejM4NDBnbmIzZ25nZTRvaTlmajEifQ.fp0Kus3cRBjo3TCGd0GF-w";
    
    const map = new mapboxgl.Map({
      container: 'map', // HTML element ID where the map will be rendered
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0, 0], // Initial map center coordinates
      zoom: 1, // Initial map zoom level
    });
    
    // Add countries layer to the map
    map.on('load', () => {
      map.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      });
      
      map.addLayer(
        {
          id: 'countries-layer',
          type: 'fill',
          source: 'countries',
          'source-layer': 'country_boundaries',
          paint: {
            'fill-color': [
              'case',
              ['==', ['get', 'iso_3166_1_alpha_3'], 'RUS'],
              '#00FF00', // Green color for Russia
              '#FFFFFF', // Default color for other countries
            ],
            'fill-outline-color': "#002514"
          },
        },
        'waterway-label' // Place the layer below waterway labels for better visibility
      );
    });

    map.on('click', 'countries-layer', function(e) {
        var countryName = e.features[0].properties.iso_3166_1; // Get the name property of the clicked feature
        alert(countryName); // Display an alert with the country name
        // console.log(countryName);
    });

    // Clean up resources on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '800px' }} />;
};

export default MapComponent;
