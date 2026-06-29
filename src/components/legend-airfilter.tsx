import React from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

import airFilterClear from '../Images/air-filter.png';
import airFilterClogged from '../Images/AirFilter_Clogged.png';

import BackButton from './backButton';

const Filter: React.FC = () => {

    const { train } = useParams<{ train: string }>();

    const filterStatusStates = [

        {
            img: airFilterClear,
            description: 'Air Filter is Clear.'
        },

        {
            img: airFilterClogged,
            description: 'Air Filter is Clogged.'
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
                                routerLink={`trains`}
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
                                FILTER STATUS LEGEND INFORMATION
                            </div>
                        </div>

                        <div className="title">
                            <div className="button"></div>
                        </div>

                    </div>

                    <div className="equipment-list">

                        {filterStatusStates.map((item, index) => (

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
                                        alt="air filter"
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

export default Filter;