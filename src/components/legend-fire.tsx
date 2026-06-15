import { IonPage, IonContent } from "@ionic/react";

import Fire_D_T1 from "../Images/Fire_D_T1.png";
import Fire_D_P1 from "../Images/Fire_D_P1.png";
import Fire_D_HVACEx from "../Images/Fire_D_HVACEx.png";
import Fire_D_U from "../Images/Fire_D_U.png";
import Fire_D_Alert from "../Images/Fire_D_Alert.png";
import Fire_D_Action from "../Images/Fire_D_Action.png";
import Fire_D_SF from "../Images/Fire_D_SF.png";
import Fire_CF_TCMS from "../Images/Fire_CF_TCMS.png";
import Fire_N_D from "../Images/Fire_N_D.png";

const Fire = () => {

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

        </IonPage>
    );
};

export default Fire;