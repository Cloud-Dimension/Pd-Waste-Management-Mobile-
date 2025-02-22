export interface ICoordinates {
  lat: number;
  long: number;
}

export interface IPlace {
  id?: string;
  placeName?: string;
  description?: string;
  type: string;
  coordinates: centerType;
  joinedCount?: number;
}

type centerType = [number, number];

export interface IMap {
  isHome?: boolean;
  step?: number;
  getCenter?: boolean;
  center: centerType;
  from?: centerType;
  to?: centerType;
  coordinates?: ICoordinates;
  target?: ICoordinates;
  zoom?: number;
  places?: IPlace[];
}

const map = ({ center, coordinates, target, zoom, places, from, to,iconPath }) => {
  const latLong = `[-25.858460,28.189610]`;
  const jsonPlaces = JSON.stringify(places);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-/dEwUy7TRxEw0dSfpm6Dth9fzH+5bwNoRWU1L3ZvqT+09wQ1ToGMgZYbHik+R8CLx+2Yk/M/VY++iFMtX56+0w==" crossorigin="anonymous" />
        <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script>
        <style>
            body {
                background: white;
                margin: 0;
            }
            #map {
              height: 100vh;
              width: 100%;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
            var map = L.map('map').setView(${latLong}, ${zoom});

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '',
                 zoomControl: true
            }).addTo(map);
            map.attributionControl.setPrefix('');

            var places = ${jsonPlaces};
            var customIcon = L.icon({
              iconUrl: "https://cdn-icons-png.flaticon.com/512/6395/6395271.png",
              iconSize: [60, 60],
              iconAnchor: [12, 41],
              popupAnchor: [0, -41]
          });
            places.forEach(function (place) {
                var marker = L.marker([place.coordinates[0], place.coordinates[1]],{ icon: customIcon }).addTo(map);
                marker.bindPopup("<b>" + place.placeName + "</b><br>" + place.description);
            });

            // Add marker for current location
            var currentLocationMarker = L.marker([${coordinates.lat}, ${coordinates.long}]).addTo(map);
        </script>
    </body>
    </html>
  `;

  return html;
};

export default map;
