import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import heaterReady from '../Images/Heater Ready.png';
import heaterNotReady from '../Images/Heater Not Ready.png';
import heaterOn from '../Images/Heater On.png';

const Heater: React.FC = () => {

    const heaterStates = [

        {
            img: heaterReady,
            description: "Heater Ready"
        },

        {
            img: heaterNotReady,
            description: "Heater Not Ready"
        },

        {
            img: heaterOn,
            description: "Heater ON"
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
                        HEATER LEGEND INFORMATION
                    </div>
                </div>

                <div className="title">
                    <div className="button"></div>
                </div>
            </div>

            <IonContent>

                <div className="full-height">

                    {heaterStates.map((item, index) => (

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
                                    alt="heater icon"
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

export default Heater;