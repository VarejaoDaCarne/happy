import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Suzano</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.6143721, -46.459095]}
                zoom={11}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            ,
            11

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap