import React from 'react'


function special_session() {
    return (
        <div className="container">
          
            <h1 id="uk">Session Organizers</h1>
           
            <div id="rd">
           
            <h2>SESSION LEAD ORGANIZER:</h2>
            <p>Amutha S, Artificial Intelligence & Data Science, Saveetha Engineering College, India</p> <p><a href="mailto:amuthabenziker@gmail.com"><span>amuthabenziker@gmail.com</span></a></p>
            <h2>CO-ORGANIZERS:</h2>
            <p>Joyal Isac S, Saveetha Engineering College, India,<a href="mailto:joyalisac@saveetha.ac.in"><span> joyalisac@saveetha.ac.in</span></a></p>
            <p>Niha K, Saveetha Engineering College, India,<a href="mailto:niha.k.cse@gmail.com"> <span>niha.k.cse@gmail.com</span></a></p>
            
           
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
            .i{
                font-size:50px;
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
