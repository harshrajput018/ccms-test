import { IonPage, IonContent } from "@ionic/react";

import RMPU_CMP1_ON from "../Images/RMPU_CMP1_ON.png";
import RMPU_CMP1_R from "../Images/RMPU_CMP1_R.png";
import RMPU_CMP1_NR from "../Images/RMPU_CMP1_NR.png";
import RMPU_CMP1_U from "../Images/RMPU_CMP1_U.png";

import RMPU_CMP2_ON from "../Images/RMPU_CMP2_ON.png";
import RMPU_CMP2_R from "../Images/RMPU_CMP2_R.png";
import RMPU_CMP2_NR from "../Images/RMPU_CMP2_NR.png";
import RMPU_CMP2_U from "../Images/RMPU_CMP2_U.png";

const Compressor = () => {

    const compressorStates = [

        {
            img: RMPU_CMP1_ON,
            description: "HVAC Compressor 1 ON."
        },

        {
            img: RMPU_CMP1_R,
            description: "HVAC Compressor 1 is Ready for Operation."
        },

        {
            img: RMPU_CMP1_NR,
            description: "HVAC Compressor 1 is Not Ready for Operation."
        },

        {
            img: RMPU_CMP1_U,
            description: "HVAC Compressor 1 Status Unknown/Invalid."
        },

        {
            img: RMPU_CMP2_ON,
            description: "HVAC Compressor 2 ON."
        },

        {
            img: RMPU_CMP2_R,
            description: "HVAC Compressor 2 is Ready for Operation."
        },

        {
            img: RMPU_CMP2_NR,
            description: "HVAC Compressor 2 is Not Ready for Operation."
        },

        {
            img: RMPU_CMP2_U,
            description: "HVAC Compressor 2 Status Unknown/Invalid."
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
                                HVAC COMPRESSOR LEGEND INFORMATION
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
                                        alt="compressor icon"
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

                </div>

            </IonContent>

        </IonPage>
    );
};

export default Compressor;