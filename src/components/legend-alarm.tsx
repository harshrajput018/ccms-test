import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import alarmOK from '../Images/PassAlarm_OK.png';
import alarmMCBOff from '../Images/PassAlarm_MCBOFF.png';
import alarmTriggered from '../Images/PassAlarm_Trigerred.png';
import alarmUnknown from '../Images/PassAlarm_Unknown.png';

const Alarm: React.FC = () => {

    const passengerAlarmStates = [

        {
            img: alarmOK,
            description: "Passenger Alarm Circuit is OK (Ready for Operation)"
        },

        {
            img: alarmMCBOff,
            description: "Passenger Alarm MCB is OFF/Tripped in any of the coach of a Basic Unit"
        },

        {
            img: alarmTriggered,
            description: "Passenger Alarm is Triggered in any of the coach of a Basic Unit"
        },

        {
            img: alarmUnknown,
            description: "Passenger Alarm Status Unknown/Invalid"
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
                        PASSENGER ALARM LEGEND INFORMATION
                    </div>
                </div>

                <div className="title">
                    <div className="button"></div>
                </div>
            </div>

            <IonContent>

                <div className="full-height">

                    {passengerAlarmStates.map((item, index) => (

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
                                    alt="passenger alarm"
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

export default Alarm;