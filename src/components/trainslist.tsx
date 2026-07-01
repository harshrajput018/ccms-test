import React, { useEffect } from 'react';
import {
    IonCard,
    IonCardContent,
    IonRouterLink,
    IonPage,
    IonContent
} from '@ionic/react';

import BackButton from './backButton';

const Trains: React.FC = () => {

    useEffect(() => {

        const handler = (ev: any) => {
            ev.detail.register(9999, () => {
                // Consume the hardware back button.
                // Do nothing.
            });
        };

        document.addEventListener('ionBackButton', handler);

        return () => {
            document.removeEventListener('ionBackButton', handler);
        };

    }, []);

    return (
        <IonPage>
            <IonContent>

                <div className="full-height">

                    <IonCard className="trainsSection custom-card">

                        <IonCardContent className="trainsList">

                            <h1 className="header">Train ID</h1>

                            <IonRouterLink routerLink="/10001/home" className="TrainItem">10001</IonRouterLink>
                            <IonRouterLink routerLink="/10002/home" className="TrainItem">10002</IonRouterLink>
                            <IonRouterLink routerLink="/10003/home" className="TrainItem">10003</IonRouterLink>
                            <IonRouterLink routerLink="/10004/home" className="TrainItem">10004</IonRouterLink>
                            <IonRouterLink routerLink="/10005/home" className="TrainItem">10005</IonRouterLink>
                            <IonRouterLink routerLink="/10006/home" className="TrainItem">10006</IonRouterLink>
                            <IonRouterLink routerLink="/10007/home" className="TrainItem">10007</IonRouterLink>
                            <IonRouterLink routerLink="/10008/home" className="TrainItem">10008</IonRouterLink>
                            <IonRouterLink routerLink="/10009/home" className="TrainItem">10009</IonRouterLink>
                            <IonRouterLink routerLink="/10010/home" className="TrainItem">10010</IonRouterLink>

                        </IonCardContent>

                    </IonCard>

                </div>

            </IonContent>

            <BackButton logout={true} />

        </IonPage>
    );
};

export default Trains;