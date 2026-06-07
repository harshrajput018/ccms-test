import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import blower1 from '../FinalImage/Blower_Blue.png'
import blower2 from '../FinalImage/Blower.png'
import blower3 from '../FinalImage/BlowerGray.png'

const BlowerInfo: React.FC = () => {

  const blowerInfo = [
    { img: blower1, description: 'RMPU 1 Blower is running in EMY Mode' },
    { img: blower1, description: 'RMPU 1 Blower ON' },
    { img: blower2, description: 'RMPU 1 Blower is ready for Operation' },
    { img: blower3, description: 'RMPU 1 Blower is not ready for Operation' },
    { img: blower1, description: 'RMPU 2 Blower is running in EMY Mode' },
    { img: blower1, description: 'RMPU 2 Blower ON' },
    { img: blower2, description: 'RMPU 2 Blower is ready for Operation' },
    { img: blower3, description: 'RMPU 2 Blower is not ready for Operation' }
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
          <div className="button">BLOWER LEGEND INFORMATION</div>
        </div>
        <div className="title">
          <div className="button"></div>
        </div>
      </div>
      <IonContent>
      <div className='full-height'>
      <div className="equipment-list">
      {blowerInfo.map((info, index) => (
            <div key={index} className="equipment-item">
            <div className="icon">
                <img src={info.img} alt={`icon`} />
            </div>
            <div className='name'>{info.description}</div>
        </div>
          ))}
                </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BlowerInfo;
