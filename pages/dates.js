import React from 'react'
function dates() {
    return (
        <div className="container">
            <h1>Dates</h1>
            <ul>
                <li>Paper submission: January 10, 2022</li>
                <li>Notification of acceptance/rejection: February 19, 2022</li>
                <li>Camera ready submission: March 20, 2022</li>
                <li>Authors registration: March 20, 2022</li>
                <li>Conference Dates: May 25-27, 2022</li>
            </ul>
            <style jsx>{`
                h1{
                    background-color: #ceb025;
                    padding: 5px 5px;
                    text-align: center;
                    text-transform: uppercase;
                }

                li {
                    list-style-position: inside;
                    padding: .5rem calc(25% + 5rem);
                }

                @media (max-width: 992px) {
                    li {
                        padding: .5rem 10rem;
                    }
                }

                @media (max-width: 768px) {
                    li {
                        padding: .5rem 3rem;
                    }
                }
               @media screen and (max-width: 560px) {
                    li {
                        padding: .5rem .5rem;
                    }
                }


            `}</style>
        </div>
    )
}

export default dates
