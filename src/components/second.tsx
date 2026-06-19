import React from 'react';
import { IonPage, IonContent, IonRouterLink } from '@ionic/react';
import { useParams } from 'react-router-dom';
import BackButton from './backButton';
import LegendButton from './legendButton';

const Second: React.FC = () => {
  const { id, train } = useParams<{ train:string,id: string }>();

  const myMap = new Map();

  // Adding key-value pairs
  myMap.set('BU-10', 12345);
  myMap.set('BU-20', 12346);
  myMap.set('BU-30', 12347);
  myMap.set('BU-40', 12348);
  myMap.set('BU-50', 12349);
  myMap.set('BU-60', 12350);

  myMap.set('BU-1', ['DTC','MC','TC1', 'MC2']);
  myMap.set('BU-2', ['MC1','TC2','MC3', 'NDTC']);
  myMap.set('BU-3', ['MC1','TC2','MC3', 'NDTC']);
  myMap.set('BU-4', ['NDTC','MC3','TC2', 'MC1']);
  myMap.set('BU-5', ['NDTC','MC3','TC2', 'MC1']);
  myMap.set('BU-6', ['MC2','TC1','MC', 'DTC']);



  
  

  return (
    <IonPage>
      <IonContent>
        <div className='full-height'>
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
    {train || '22665'}
</IonRouterLink>
            <IonRouterLink routerLink={`/${train}/home`} className="title"><div>HOMEPAGE</div></IonRouterLink>
          </div>
          <div className="heading-first">
            <IonRouterLink routerLink={`/${train}/home`} className="train-number title">{id}</IonRouterLink>
            <div className="title">{myMap.get(`${id}0`)}</div>
          </div>
          <div className="coaches">
            <IonRouterLink routerLink={`/${train}/third/${id}/${myMap.get(id)[0]}`} className='coach'><div>{myMap.get(id)[0]}</div></IonRouterLink>
            <IonRouterLink routerLink={`/${train}/third/${id}/${myMap.get(id)[1]}`} className='coach'><div>{myMap.get(id)[1]}</div></IonRouterLink>
            <IonRouterLink routerLink={`/${train}/third/${id}/${myMap.get(id)[2]}`} className='coach'><div>{myMap.get(id)[2]}</div></IonRouterLink>
            <IonRouterLink routerLink={`/${train}/third/${id}/${myMap.get(id)[3]}`} className='coach'><div>{myMap.get(id)[3]}</div></IonRouterLink>
          </div>
          <LegendButton />
        </div>
      </IonContent>
      <BackButton />
    </IonPage>
  );
}

export default Second;
