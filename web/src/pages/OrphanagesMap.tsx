import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
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

                    <h2>Escolha um orfanato no map</h2>
                    <p>Mutias crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Suzano</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.614687, -46.4587521]}
                zoom={11}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" />
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