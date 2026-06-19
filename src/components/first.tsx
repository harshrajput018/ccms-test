import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { Link, useParams } from 'react-router-dom';
import './ExploreContainer.css'; // Make sure to keep the CSS file the same
import BackButton from './backButton';
import LegendButton from './legendButton';

const First = () => {
    const { train, option } = useParams<{ train: string, option: string }>();
    return (
        <IonPage >
            
            <IonContent>
            <div className='full-height'>
                <div className="heading-first">
                     <IonRouterLink className="train-number button" routerLink='/trains'>{train}</IonRouterLink>
                    <div className="title">
                        <div >HOMEPAGE</div>
                    </div>
                </div>
                <div className="heading-first">
                    <div className="train-number"></div>
                    <div className="title"></div>
                </div>
                <div className="coaches">
                    <IonRouterLink routerLink={`/${train}/second/BU-1`} className='coach'>
                        <div >BU-1</div>
                    </IonRouterLink>
                    <IonRouterLink routerLink={`/${train}/second/BU-2`} className='coach'>
                        <div >BU-2</div>
                    </IonRouterLink>
                    <IonRouterLink routerLink={`/${train}/second/BU-3`} className='coach'>
                        <div >BU-3</div>
                    </IonRouterLink>
                    <IonRouterLink routerLink={`/${train}/second/BU-4`} className='coach'>
                        <div >BU-4</div>
                    </IonRouterLink>
                    <IonRouterLink routerLink={`/${train}/second/BU-5`} className='coach'>
                        <div ><div>BU-5</div> </div>
                    </IonRouterLink>
                    <IonRouterLink routerLink={`/${train}/second/BU-6`} className='coach'>
                        <div ><div>BU-6</div> </div>
                    </IonRouterLink>
                </div>
                <LegendButton />
                </div>
            </IonContent>
            
        <BackButton />
        </IonPage>
    );
}

export default First;
