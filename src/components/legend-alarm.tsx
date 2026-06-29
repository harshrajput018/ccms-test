import React from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

import alarmOK from '../Images/PassAlarm_OK.png';
import alarmMCBOff from '../Images/PassAlarm_MCBOFF.png';
import alarmTriggered from '../Images/PassAlarm_Trigerred.png';
import alarmUnknown from '../Images/PassAlarm_Unknown.png';

import BackButton from './backButton';

const Alarm: React.FC = () => {

    const { train } = useParams<{ train: string }>();

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
                                    alt="passenger alarm"
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

export default Alarm;