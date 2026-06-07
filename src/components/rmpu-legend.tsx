import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard,  } from '@ionic/react';
import rm1 from '../FinalImage/RM_RM.png'
import rm2 from '../FinalImage/RMPU_Emergency.png'

const RMPULegendInfo: React.FC = () => {


  const images = [
    rm1,
    rm2,
    rm1,
    rm2,rm1,
    rm2,rm1,
    rm2,rm1,
    rm2,rm1,
    rm2,rm1,
    rm2,

  ]

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
          <div className="button">RMPU LEGEND INFORMATION</div>
        </div>
        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>
      <div className='full-height'>
       
          
            {[
              "RMPU unit 1 in coach is ready to operate in Emergency mode.",
              "RMPU 1 Blower is running in emergency mode.",
              "RMPU unit 1 is ready for operation in Normal mode. Three phase supply available for all the RMPU units in the BU.",
              "RMPU unit 1 is running in compressor off and Blower on state.",
              "RMPU unit 1 is running in compressor on state.",
              "RMPU 1 status is not available.",
              "RMPU 1 Heater ON.",
              "RMPU unit 2 in coach is ready to operate in Emergency mode.",
              "RMPU 2 Blower is running in emergency mode.",
              "RMPU unit 2 is ready for operation in Normal mode. Three phase supply available for all the RMPU units in the BU.",
              "RMPU unit 2 is running in compressor off and Blower on state.",
              "RMPU unit 2 is running in compressor on state.",
              "RMPU 2 status is not available.",
              "RMPU 2 Heater ON."
            ].map((text, index) => (
              
                <div key={index} className="equipment-item">
                <div className="icon">
                    <img src={images[index]} alt={`icon`} />
                </div>
                <div className='name'>{text}</div>
            </div>
              
            ))}
          
       </div>
      </IonContent>
    </IonPage>
  );
};

export default RMPULegendInfo;
