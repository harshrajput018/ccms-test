import React from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

import PL1_M_OFF from '../Images/PL1_M_OFF.png';
import PL1_OFF_DF from '../Images/PL1_OFF_DF.png';
import PL1_OFF from '../Images/PL1_OFF.png';
import PL1_ON from '../Images/PL1_ON.png';

import PL2_M_OFF from '../Images/PL2_M_OFF.png';
import PL2_OFF_DF from '../Images/PL2_OFF_DF.png';
import PL2_OFF from '../Images/PL2_OFF.png';
import PL2_ON from '../Images/PL2_ON.png';

import BackButton from './backButton';

const Light: React.FC = () => {

    const { train } = useParams<{ train: string }>();

    const passengerLightStates = [

        {
            img: PL1_M_OFF,
            description: "Passenger Lights BD MCB in Off Position"
        },
        {
            img: PL1_OFF,
            description: "Passenger Lights BD OFF due to Driver command"
        },
        {
            img: PL1_OFF_DF,
            description: "Passenger Lights BD OFF due to Fault/MCB Tripped/Degraded Mode"
        },
        {
            img: PL1_ON,
            description: "Passenger Lights BD is ON"
        },

        {
            img: PL2_M_OFF,
            description: "Passenger Lights BN MCB in Off Position"
        },
        {
            img: PL2_OFF,
            description: "Passenger Lights BN OFF due to Driver command"
        },
        {
            img: PL2_OFF_DF,
            description: "Passenger Lights BN OFF due to Fault/MCB Tripped/Degraded Mode"
        },
        {
            img: PL2_ON,
            description: "Passenger Lights BN is ON"
        }

    ];

    return (
        <IonPage>

            <div className="heading-first">

                <IonRouterLink
                    routerLink={`/${train}/legend`}
                    className="train-number"
                    style={{
                        textDecoration: 'none',
                        color: 'yellow',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    LEGENDS
                </IonRouterLink>

                <div className="title">

                    <IonRouterLink
                        routerLink={`/trains`}
                        className="title"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit"
                        }}
                    >
                        <IonIcon
                            icon={home}
                            style={{
                                fontSize: "30px",
                                color: "white"
                            }}
                        />
                    </IonRouterLink>

                </div>

            </div>

            <div className="heading-first">

                <div className="train-number title">
                    <div className="button">
                        PASSENGER LIGHT LEGEND INFORMATION
                    </div>
                </div>

                <div className="title">
                    <div className="button"></div>
                </div>

            </div>

            <IonContent>

                <div className="full-height">

                    {passengerLightStates.map((item, index) => (

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
                                    alt="passenger light"
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

            <BackButton />

        </IonPage>
    );
};

export default Light;