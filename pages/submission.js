import React from 'react'

function submission() {
    return (
        <div className="container">
            <h1>submission</h1>
            <ul>
                <li>Submitted papers should not exceed 8 pages plus at most 2 pages overlength.</li>
                <li>Submissions of full papers are accepted online through the EasyChair system.</li>
                <li>EAIS2022 proceedings will be published on IEEE Xplore Digital Library. Authors of selected papers will be invited to submit extended versions for possible inclusion in a special issue of Evolving Systems – An Interdisciplinary Journal for Advanced Science and Technology (Springer).</li>
            </ul>
            <style jsx>{`
             h1{
                background-color:#ceb025;
                padding: 5px 5px;
                text-align: center;
                text-transform: uppercase;
            }
            ul {
                padding: .5rem 10rem;
            }
            li {
                line-height: 1.6;
            }
            @media (max-width: 768px) {
                ul {
                    padding: .5rem 1.5rem;
                }
            }
            `}

            </style>
        </div>
    )
}

export default submission
