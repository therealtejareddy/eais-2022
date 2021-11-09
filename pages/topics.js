import React from 'react'

function topics() {
    return (
        <div className="container">
            <h1>RECOMMENDED TOPICS</h1>
            <p>Topics to be discussed in this special session include (but are not limited to) the following:</p>
            <ol>
                <li>Image Analysis using adaptive learning </li>
                <li>Image Segmentation using adaptive learning</li>
                <li>Image Segmentation using adaptive learning</li>
                <li>Image Processing Applications</li>
                <li>Active Machine Learning and Machine Learning Applications</li>
                <li>Clustering, Classification, and Regression Methods </li>
                <li>Supervised, Semi-Supervised and Unsupervised Learning</li>
                <li>Unsupervised Pre-trained Networks (UPNs)</li>
            </ol>
            <style jsx>{`
            h1{
                    background-color:#ceb025;
                    padding: 5px 5px;
                    text-align: center;
                    text-transform: uppercase;
                }
                p {
                    text-align: center;
                }
                li{
                   padding: .5rem calc(30vw - 10px);
                    list-style-position: inside;
                }
                @media screen and (max-width: 992px) {
                    li{
                        padding: .5rem 5rem;
                    }
                }
                @media screen and (max-width: 768px) {
                    li{
                        padding: .5rem 1rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default topics
