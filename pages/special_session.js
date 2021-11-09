import React from 'react'


function special_session() {
    return (
        <div className="container">
          
            <h1 id="uk">Special Session</h1>
           
            <div id="rd">
            <p >Adaptive Learning Systems for Image Processing (<a href="#">more info</a>)</p>
            <h2>SPECIAL SESSION LEAD ORGANIZER:</h2>
            <p>Amutha S, Artificial Intelligence & Data Science, Saveetha Engineering College, India</p> <p><span>amuthabenziker@gmail.com</span></p>
            <h2>CO-ORGANIZERS:</h2>
            <p>Joyal Isac S, Saveetha Engineering College, India,<span> joyalisac@saveetha.ac.in</span></p>
            <p>Niha K, Saveetha Engineering College, India, <span>niha.k.cse@gmail.com</span></p>
            <h2>AIM AND SCOPE OF SESSION:</h2>
            <p className="justify">Aim of this special session is to bring together researchers from different fields of expertise to discuss how deep learning could help analysis, modelling, simulation, and application in the Interdisciplinary domains of several innovative technologies.</p>
            <p className="justify">In the last few years, the technologies related to imaging, video processing, computer graphics, 3D modelling and multimedia have been greatly employed in various application areas such as detection, image analysis, image compression, face recognition etc. The continuous development of these technologies leads researchers to propose new methodologies and applications in this field. Moreover, recent image-processing and machine learning algorithms give the opportunity to process large datasets as well as images, in order to extract information and develop new analysis procedures.</p>
            <p className="justify">The evolution of learning algorithms is in demand today. They cover not only Information and communication technology, but also all kinds of systems in our society, including business, finance, industry, manufacture, management, and environment. Adaptive learning algorithms are going to be a game-changer for many application areas also it is going to be applied in various research-fields.</p>
            </div>
            <style jsx>{`
            #rd{
                padding: 0 6em;
            }
            #uk{
                background-color: #ceb025;
                padding: 5px 5px;
                text-align: center;
                text-transform: uppercase;
            }
            p,h2{
                text-align:center;
            }
            p{
                line-height: 1.6;
            }
            span{
                color:#ceb205;
                font-size:20px;
            }
            span:hover{
                color:black;
                cursor:pointer;
            }
            .justify{
                display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
            }
            a{
                color: #003704;
            }

            @media only screen and (max-width: 600px) {
                #rd{
                    padding: 0 2em;
                }
            }


            `}

            </style>
        </div>
    )
}

export default special_session
