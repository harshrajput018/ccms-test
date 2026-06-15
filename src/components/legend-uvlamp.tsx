import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import uvLampOff from '../Images/UV Lamp Off.png';
import uvLampOn from '../Images/UV Lamp ON.png';
import uvLampMCBTripped from '../Images/UV Lamp_ MCB_T.png';

const Lamp: React.FC = () => {

    const uvLampStates = [

        {
            img: uvLampOff,
            description: "UV Lamp OFF"
        },

        {
            img: uvLampOn,
            description: "UV Lamp ON"
        },

        {
            img: uvLampMCBTripped,
            description: "UV Lamp MCB Tripped"
        }

    ];

    return (
        <IonPage>

            <div className="heading-first">
                <div className="train-number">
                    <div className="button">22665</div>
                </div>

                <div className="title">
                    <div className="button">HOMEPAGE</div>
                </div>
            </div>

            <div className="heading-first">
                <div className="train-number title">
                    <div className="button">
                        UV LAMP LEGEND INFORMATION
                    </div>
                </div>

                <div className="title">
                    <div className="button"></div>
                </div>
            </div>

            <IonContent>

                <div className="full-height">

                    {uvLampStates.map((item, index) => (

                        <div
                            key={index}
                            className="equipment-item"
                        >

                            <div
                                className="icon"
                                style={{
                                    width: "50px",
                                    height: "40px",
                                    border: "2px solid white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexShrink: 0,
                                    margin: "4px",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    padding: 0
                                }}
                            >

                                <img
                                    src={item.img}
                                    alt="uv lamp icon"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "fill",
                                        display: "block"
                                    }}
                                />

                            </div>

                            <div className="name">
                                {item.description}
                            </div>

                        </div>

                    ))}

                </div>

            </IonContent>

        </IonPage>
    );
};

export default Lamp;