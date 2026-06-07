import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Light = () => {
    const passengerLightStates = [
        { icon: 'bulb_OffDriver.png', description: 'Passenger Light Ready for Operation.', color: 'white' },
        { icon: 'bulb_LL2_O.png', description: '100% Lighting is ON.', color: 'lightblue' },
        { icon: 'BB_S_L.png', description: 'At least one light is ON in BU.', color: 'red' },
        { icon: 'BB_S_H.png', description: 'All Passenger Lights MCB are in OFF position.', color: 'red' },
        { icon: 'BB_Y.png', description: '50% Lighting is ON due to Faulty/MCB Trip/Degraded Mode.', color: 'yellow' },
        { icon: 'bulb_OffDriver.png', description: 'Passenger Light OFF due to Driver command.', color: 'gray' }
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
                    <div className="train-number title">PASSENGER LIGHT LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {passengerLightStates.map((item, index) => (
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

export default Light;
