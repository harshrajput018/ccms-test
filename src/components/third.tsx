import React from 'react';
import { IonPage, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { useParams } from 'react-router-dom';

const Third: React.FC = () => {
  const { id,train, option } = useParams<{train:string, id: string, option: string }>();

  const myMap = new Map();

  myMap.set('BU-10', 12345);
  myMap.set('BU-20', 12346);
  myMap.set('BU-30', 12347);
  myMap.set('BU-40', 12348);
  myMap.set('BU-50', 12349);
  myMap.set('BU-60', 12350);

  return (
    <IonPage>
      <IonContent>
      <div className='full-height'>
        <div className="heading-first">
          <div className="train-number"><div>{train}</div></div>
          <IonRouterLink routerLink={`/${train}/home`} className="title"><div>HOMEPAGE</div></IonRouterLink>
        </div>
        <div className="heading-first">
          <IonRouterLink routerLink={`/${train}/second/${id}`} className="train-number title">{id.slice(0, 2) + id.slice(3)}-{option}</IonRouterLink>
          <div className="title">{myMap.get(`${id}0`)}</div>
        </div>
        <div className="coaches">
          <IonRouterLink routerLink={`/${train}/symbols/${id}/${option}`} className='coach'>
            <div>RMPU Status-Symbols</div>
          </IonRouterLink>
          <IonRouterLink routerLink={`/${train}/params/${id}/${option}`} className='coach'>
            <div>RMPU Status-Parameters</div>
          </IonRouterLink>
        </div>
        <IonRouterLink routerLink={'/legend'} className="legendBtn">
          <div>LEGENDS</div>
        </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Third;
