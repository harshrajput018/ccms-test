import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import damperOpen from '../Images/FreshAirDamper_Open.png';
import damperClosed from '../Images/FreshAirDamper_Close.png';

const AirDamper: React.FC = () => {

    const freshAirDamperStates = [

        {
            img: damperOpen,
            description: "Fresh Air Damper Open"
        },

        {
            img: damperClosed,
            description: "Fresh Air Damper Closed"
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
                        FRESH AIR DAMPER LEGEND INFORMATION
                    </div>
                </div>

                <div className="title">
                    <div className="button"></div>
                </div>
            </div>

            <IonContent>

                <div className="full-height">

                    {freshAirDamperStates.map((item, index) => (

                        <div
                            key={index}
                            className="equipment-item"
                        >

                            <div
                                className="icon"
                                style={{
                                    width: "70px",
                                    height: "55px",
                                    border: "2px solid white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexShrink: 0,
                                    margin: "4px",
                                    boxSizing: "border-box"
                                }}
                            >

                                <img
                                    src={item.img}
                                    alt="Fresh Air Damper"
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        objectFit: "contain",
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

export default AirDamper;