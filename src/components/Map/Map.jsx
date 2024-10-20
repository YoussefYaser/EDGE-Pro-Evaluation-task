import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css'
import { forwardRef } from 'react'


const Map = forwardRef(function Map(props, {sections}) {

    return (
        <section ref={home=>sections.current[0] = home} id='home' className=" map ">
            <div className="container">
                <div>
                    <MapContainer center={[30.029883693373808, 31.459625089094196]} zoom={5} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[30.029883693373808, 31.459625089094196]}>
                            <Popup>
                                Egypt, Cairo <br /> Edge pro for information systems
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    )
})


export default Map;
