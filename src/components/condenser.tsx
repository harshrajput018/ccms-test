import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard} from '@ionic/react';

const CondenserLegendInfo: React.FC = () => {

  const condenserStates = [
    { icon: 'CondensorOn.png', description: 'RMPU 1 Condenser Fan 1 is ON.', color: 'lightblue' },
    { icon: 'condenser.png', description: 'RMPU 1 Condenser Fan 1 is ready for operation.', color: 'gray' },
    { icon: 'CondensorNotReady.png', description: 'RMPU 1 Condenser Fan 1 is not ready for operation.', color: 'black' },
    { icon: 'CondensorOn.png', description: 'RMPU 1 Condenser Fan 2 is ON.', color: 'lightblue' },
    { icon: 'condenser.png', description: 'RMPU 1 Condenser Fan 2 is ready for operation.', color: 'gray' },
    { icon: 'CondensorNotReady.png', description: 'RMPU 1 Condenser Fan 2 is not ready for operation.', color: 'black' },
    { icon: 'CondensorOn.png', description: 'RMPU 2 Condenser Fan 1 is ON.', color: 'lightblue' },
    { icon: 'condenser.png', description: 'RMPU 2 Condenser Fan 1 is ready for operation.', color: 'gray' },
    { icon: 'CondensorNotReady.png', description: 'RMPU 2 Condenser Fan 1 is not ready for operation.', color: 'black' },
    { icon: 'CondensorOn.png', description: 'RMPU 2 Condenser Fan 2 is ON.', color: 'lightblue' },
    { icon: 'condenser.png', description: 'RMPU 2 Condenser Fan 2 is ready for operation.', color: 'gray' },
    { icon: 'CondensorNotReady.png', description: 'RMPU 2 Condenser Fan 2 is not ready for operation.', color: 'black' }
  ];
  
  return (
    <IonPage>
            <IonContent className="full-height">
            <div className='full-height'>
                <div className="heading-first">
                    <div className="train-number"><div>22665</div></div>
                    <div className="title"><div>HOMEPAGE</div></div>
                </div>
                <div className="heading-first">
                    <div className="train-number title">CONDENSER LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {condenserStates.map((item, index) => (
                        <div key={index} className="equipment-item">
                            <div className="icon">
                                <img src={`./NewImages/${item.icon}`} alt={`${item.description} icon`} />
                            </div>
                            <div className="name">{item.description}</div>
                        </div>
                    ))}
                </div>
                </div>
            </IonContent>
        </IonPage>
  );
};

export default CondenserLegendInfo;
