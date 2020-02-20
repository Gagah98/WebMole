import React from 'react'
import photo_cv from './img/photo_cv-min.jpg'

const CV = () => {
    return (
        <div className="cv">
            <div className="row">
            <div className="column-2 cv-name">
                <h2>Gaëtan Haefeli</h2>
            <img id="cv-img" src={photo_cv} alt="gaetan haefeli cv"></img>
            </div>
            <div className="column-2 cv-list">
            <h2>Ingénieur en médias</h2>
            <h3>Consultation digital</h3>
            <h3>Développement web</h3>
            <h3>Marketing digital</h3>
            <p>Titulaire d'un bachelor d'ingénieur en médias en 2020, j'ai tout de suite voulu me tourner vers l'entrepreunariat. 
                Le monde des startups et du freelance me passionnent. J'aime découvrir de nouveaux marchés et analyser leurs spécificités. </p>
                </div>
            </div>
        </div>
    )
}

export default CV;