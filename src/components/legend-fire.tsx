import { useParams } from 'react-router-dom';
import { IonPage, IonContent, IonRouterLink, IonIcon } from "@ionic/react";
import { home } from 'ionicons/icons';

import Fire_D_T1 from "../Images/Fire_D_T1.png";
import Fire_D_P1 from "../Images/Fire_D_P1.png";
import Fire_D_HVACEx from "../Images/Fire_D_HVACEx.png";
import Fire_D_U from "../Images/Fire_D_U.png";
import Fire_D_Alert from "../Images/Fire_D_Alert.png";
import Fire_D_Action from "../Images/Fire_D_Action.png";
import Fire_D_SF from "../Images/Fire_D_SF.png";
import Fire_CF_TCMS from "../Images/Fire_CF_TCMS.png";
import Fire_N_D from "../Images/Fire_N_D.png";

import BackButton from "./backButton";

const Fire = () => {

    const { train } = useParams<{ train: string }>();

    const fireLegendStates = [

        {
            img: Fire_D_T1,
            description: "Fire Detected at Passenger Area/Toilet."
        },

        {
            img: Fire_D_P1,
            description: "Fire Detected at Passenger Panel/Pantry/HVAC Internal."
        },

        {
            img: Fire_D_HVACEx,
            description: "Fire Detected at HVAC External."
        },

        {
            img: Fire_D_U,
            description: "Fire Detected in Underframe Equipment."
        },

        {
            img: Fire_D_Alert,
            description: "Alert Detected from FDS System."
        },

        {
            img: Fire_D_Action,
            description: "Action Detected from FDS System."
        },

        {
            img: Fire_D_SF,
            description: "Fault Detected from FDS System."
        },

        {
            img: Fire_CF_TCMS,
            description: "Communication Failure between TCMS & FDCU."
        },

        {
            img: Fire_N_D,
            description: "No Fire Detected."
        }

    ];

    return (
        <IonPage>

            <IonContent className="full-height">

                <div className="full-height">

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
                                FDS FIRE LEGEND INFORMATION
                            </div>
                        </div>

                        <div className="title">
                            <div className="button"></div>
                        </div>

                    </div>

                    <div className="equipment-list">

                        {fireLegendStates.map((item, index) => (

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
                                        alt="fire icon"
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

                </div>

            </IonContent>

            <BackButton />

        </IonPage>
    );
};

export default Fire;