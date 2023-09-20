import React from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0">
                <LeftSide />
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column h-100">
    <img src="/icon-web-01.png" alt="Logo de sitio" style={{ width: '8rem', marginBottom: '10px' }} />
    <h4 style={{ fontSize: '1.5rem', color: '#333', textAlign: 'center' }}>
        Bienvenue sur cette page dédiée aux réclamations, suggestions ou questions des utilisateurs à l'administrateur.
    </h4>
    <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', marginTop: '10px' }}>
        Votre avis compte, n'hésitez pas à nous faire part de vos retours et besoins, Djamel 658 556 296.
    </p>
</div>



</div>

         
         
    )
}

export default Message
