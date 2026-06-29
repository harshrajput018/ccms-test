import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonRouterLink, IonPage, IonContent, IonIcon } from '@ionic/react';
import { home, trendingUpOutline } from 'ionicons/icons';
import BackButton from './backButton';

const Trains: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="full-height">
        <IonCard className="trainsSection custom-card">
            
            <IonCardContent className='trainsList'>
            <h1 className="header">Train ID</h1>
                <IonRouterLink routerLink='/10001/home' className="TrainItem">10001</IonRouterLink>
                <IonRouterLink routerLink='/10002/home' className="TrainItem">10002</IonRouterLink>
                <IonRouterLink routerLink='/10003/home' className="TrainItem">10003</IonRouterLink>
                <IonRouterLink routerLink='/10004/home' className="TrainItem">10004</IonRouterLink>
                <IonRouterLink routerLink='/10005/home' className="TrainItem">10005</IonRouterLink>
                <IonRouterLink routerLink='/10006/home' className="TrainItem">10006</IonRouterLink>
                <IonRouterLink routerLink='/10007/home' className="TrainItem">10007</IonRouterLink>
                <IonRouterLink routerLink='/10008/home' className="TrainItem">10008</IonRouterLink>
                <IonRouterLink routerLink='/10009/home' className="TrainItem">10009</IonRouterLink>
                <IonRouterLink routerLink='/10010/home' className="TrainItem">10010</IonRouterLink>


            </IonCardContent>
        </IonCard>
        </div>
        </IonContent>
        <BackButton logout = {true}/>
        </IonPage>

    );
};

export default Trains;
