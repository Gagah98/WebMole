import React from 'react'
import logo from './img/logo_webmole.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faChartBar, faTools } from '@fortawesome/free-solid-svg-icons'

const SellingPattern = () => {
    return (
        <div className="row">
            <div className="column-3">
                <FontAwesomeIcon icon={faHandshake} className="icon" />
                <h2>Entretien gratuit</h2>
            </div>
            <div className="column-3">
                <FontAwesomeIcon icon={faChartBar} className="icon"/>
                <h2>Analyse des besoins</h2>
            </div>
            <div className="column-3">
                <FontAwesomeIcon icon={faTools} className="icon" />
                <h2>Mise en place de la stratégie</h2>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <main>
            <div className="homepage">
                <img id="logo-homepage" src={logo} alt="webmole logo"></img>
                <h1 id="title">Accélerer votre business grâce au digital</h1>
                <p>Vous venez de trouver une idée géniale, mais vous ne savez pas comment la faire connaître au public correspondant. Votre entreprise stagne et vous désirez faire croître votre businness. Grâce au marketing digital, votre business peut </p>
            </div>

            <SellingPattern />
        </main>
    )
}

export default Home;