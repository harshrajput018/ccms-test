import { IonPage, IonContent, IonRouterLink } from "@ionic/react";

import RMPU_CMP1_ON from "../Images/RMPU_CMP1_ON.png";
import RMPU_CMP1_R from "../Images/RMPU_CMP1_R.png";
import RMPU_CMP1_NR from "../Images/RMPU_CMP1_NR.png";
import RMPU_CMP1_U from "../Images/RMPU_CMP1_U.png";

import RMPU_CMP2_ON from "../Images/RMPU_CMP2_ON.png";
import RMPU_CMP2_R from "../Images/RMPU_CMP2_R.png";
import RMPU_CMP2_NR from "../Images/RMPU_CMP2_NR.png";
import RMPU_CMP2_U from "../Images/RMPU_CMP2_U.png";
import BackButton from "./backButton";

const Compressor = () => {

    const compressorStates = [

        // RMPU Compressor 1

        {
            img: RMPU_CMP1_ON,
            description: "RMPU Compressor 1 ON"
        },

        {
            img: RMPU_CMP1_R,
            description: "RMPU Compressor 1 is Ready for Operation"
        },

        {
            img: RMPU_CMP1_NR,
            description: "RMPU Compressor 1 is Not Ready for Operation"
        },

        {
            img: RMPU_CMP1_U,
            description: "RMPU Compressor 1 Status Unknown/Invalid"
        },

        // RMPU Compressor 2

        {
            img: RMPU_CMP2_ON,
            description: "RMPU Compressor 2 ON"
        },

        {
            img: RMPU_CMP2_R,
            description: "RMPU Compressor 2 is Ready for Operation"
        },

        {
            img: RMPU_CMP2_NR,
            description: "RMPU Compressor 2 is Not Ready for Operation"
        },

        {
            img: RMPU_CMP2_U,
            description: "RMPU Compressor 2 Status Unknown/Invalid"
        }

    ];

    return (
        <IonPage>

            <IonContent className="full-height">

                <div className="full-height">

                    <div className="heading-first">
                        <IonRouterLink
    routerLink="/trains"
    className="train-number"
    style={{
        textDecoration: 'none',
        color: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}
>
    {'22665'}
</IonRouterLink>

                        <div className="title">
                            <div className="button">HOMEPAGE</div>
                        </div>
                    </div>

                    <div className="heading-first">
                        <div className="train-number title">
                            <div className="button">
                                RMPU COMPRESSOR LEGEND INFORMATION
                            </div>
                        </div>

                        <div className="title">
                            <div className="button"></div>
                        </div>
                    </div>

                    <div className="equipment-list">

                        {compressorStates.map((item, index) => (

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
                                        alt="compressor icon"
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

export default Compressor;