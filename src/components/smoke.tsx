import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import smoke1 from '../FinalImage/RMPSmoke1.png'
import smoke2 from '../FinalImage/RMPSmokeUknown.png'
import CondenserLegendInfo from './condenser';

const SmokeInfo: React.FC = () => {
  const smokeInfo = [
    { img: smoke1, description: 'RMPU 1 Smoke Detected', bgColor: 'red' },
    { img: smoke1, description: 'RMPU 1 Smoke Detection Sensor is active' },
    { img: smoke2, description: 'RMPU 1 Smoke Detector is in unknown state' },
    { img: smoke1, description: 'RMPU 2 Smoke Detected', bgColor: 'red' },
    { img: smoke1, description: 'RMPU 2 Smoke Detection Sensor is active' },
    { img: smoke2, description: 'RMPU 2 Smoke Detector is in unknown state' },
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
          <div className="button">RMPU SMOKE LEGEND INFORMATION</div>
        </div>
        <div className="title">
          <div className="button"></div>
        </div>
      </div>
      <IonContent>
      <div className='full-height'>
      {smokeInfo.map((info, index) => (
            <div key={index} className="equipment-item">
            <div className="icon">
                <img src={info.img} alt={`icon`} />
            </div>
            <div className='name'>{info.description}</div>
        </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SmokeInfo;
