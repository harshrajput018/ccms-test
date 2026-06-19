import React from 'react';
import { IonPage, IonContent, IonRouterLink } from '@ionic/react';

import airFilterClear from '../Images/air-filter.png';
import airFilterClogged from '../Images/AirFilter_Clogged.png';
import BackButton from './backButton';

const Filter: React.FC = () => {

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