import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonRouterLink } from '@ionic/react';
import aux01 from '../FinalImage/Auxilliaty  converter38.png'
import aux02 from '../FinalImage/AuxilliatyconverterNoReady.png'
import aux03 from '../FinalImage/Auxilliaty  converter.png'
import aux04 from '../FinalImage/Auxilliaty converterNotEnabled.png'
import aux05 from '../FinalImage/AuxilliatyconverterClosed.png'

const AuxConverterInfo: React.FC = () => {

  const auxInfo = [
    { img: aux01, description: 'Auxiliary Converter 1 is ready for operation, communication is healthy with Aux unit, but VCB is not closed.' },
    { img: aux02, description: 'Auxiliary Converter 1 is not ready for operation.' },
    { img: aux03, description: 'Auxiliary Converter 1 is Enabled and is running in a healthy condition with no faults.' },
    { img: aux04, description: 'Auxiliary Converter 1 is not Enabled in the BU but three phase supply is available due to changeover.' },
    { img: aux05, description: 'If the VCB is closed and three phase supply is not available on the bus due to no changeover.' },
    { img: aux01, description: 'Auxiliary Converter 2 is ready for operation, communication is healthy with Aux unit but VCB is not closed.' },
    { img: aux02, description: 'Auxiliary Converter 2 is not ready for operation.' },
    { img: aux03, description: 'Auxiliary Converter 2 is Enabled and is running in a healthy condition with no faults.' },
    { img: aux04, description: 'Auxiliary Converter 2 is not Enabled in the BU but three phase supply is available due to changeover.' },
    { img: aux05, description: 'If the VCB is closed and three phase supply is not available on the bus due to no changeover.' }
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
          <div className="button">AUXILIARY CONVERTER LEGEND INFORMATION</div>
        </div>
        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>
        <div className='full-height'>


        {auxInfo.map((info, index) => (
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

export default AuxConverterInfo;
