import { MapContainer, GeoJSON } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './Map.css';

const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
};

const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
};

const Map = props => {
    return (
        <MapContainer attributionControl={false} style={{ height: "90vh" }} zoom={2} center={[0, 0]}>
            <GeoJSON style={mapStyle} data={props.countries} onEachFeature={onEachCountry} />
        </MapContainer>
    );
};

export default Map;