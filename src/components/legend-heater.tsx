import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Heater = () => {
    const heaterStates = [
        { icon: 'heater.png', description: 'Heater Ready.', color: 'lightgray' },
        { icon: 'Heater On.png', description: 'Heater Not Ready.', color: 'gray' },
        { icon: 'Heater Not Ready.png', description: 'Heater ON.', color: 'lightblue' },
        { icon: 'Heater Faulty.png', description: 'Heater Faulty.', color: 'red' }
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
                    <div className="train-number title">HEATER LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {heaterStates.map((item, index) => (
                        <div key={index} className="equipment-item">
                            <div className="icon">
                                <img src={`/NewImages/${item.icon}`} alt={`${item.description} icon`} />
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

export default Heater;
