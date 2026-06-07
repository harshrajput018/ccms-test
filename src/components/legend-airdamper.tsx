import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const AirDamper = () => {
    const freshAirDamperStates = [
        { icon: 'fresh-air-damper.png', description: 'Fresh Air Damper Open.', color: 'white' },
        { icon: 'FreshAirDamper_Closed.png', description: 'Fresh Air Damper Closed.', color: 'lightblue' }
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
                    <div className="train-number title">FRESH AIR DAMPER LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {freshAirDamperStates.map((item, index) => (
                        <div key={index} className="equipment-item">
                            <div style={{background:`${item.color}`, textAlign:'center'}} className="icon">
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

export default AirDamper;
