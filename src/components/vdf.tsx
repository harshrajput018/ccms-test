import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import vfd1 from '../FinalImage/VFDON.png'
import vfd2 from '../FinalImage/VFDNotready.png'
import vfd3 from '../FinalImage/VFDReady.png'
import vfd4 from '../FinalImage/VFDFaulty.png'




const VFDIcon: React.FC = () => {
  const vfdStatuses = [
    { img: vfd1, description: 'RMPU 1 Compressor VFD is ON' },
    { img: vfd2, description: 'RMPU 1 Compressor VFD is Not ready for operation' },
    { img: vfd3, description: 'RMPU 1 Compressor VFD is ready for operation' },
    { img: vfd4, description: 'RMPU 1 Compressor VFD is Faulty' },
    { img: vfd1, description: 'RMPU 1 Blower VFD is ON' },
    { img: vfd2, description: 'RMPU 1 Blower VFD is Not ready for operation' },
    { img: vfd3, description: 'RMPU 1 Blower VFD is ready for operation' },
    { img: vfd4, description: 'RMPU 1 Blower VFD is Faulty' },
    { img: vfd1, description: 'RMPU 2 Compressor VFD is ON' },
    { img: vfd2, description: 'RMPU 2 Compressor VFD is Not ready for operation' },
    { img: vfd3, description: 'RMPU 2 Compressor VFD is ready for operation' },
    { img: vfd4, description: 'RMPU 2 Compressor VFD is Faulty' },
    { img: vfd1, description: 'RMPU 2 Blower VFD is ON' },
    { img: vfd2, description: 'RMPU 2 Blower VFD is Not ready for operation' },
    { img: vfd3, description: 'RMPU 2 Blower VFD is ready for operation' },
    { img: vfd4, description: 'RMPU 2 Blower VFD is Faulty' },
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
          <div className="button">VFD LEGEND INFORMATION</div>
        </div>
        <div className="title">
          <div className="button"></div>
        </div>
      </div>
      <IonContent>
      <div className='full-height'>
      {vfdStatuses.map((info, index) => (
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

export default VFDIcon;
