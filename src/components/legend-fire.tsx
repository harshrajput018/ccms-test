import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Fire = () => {
    const fireLegendStates = [
        { icon: 'FDSFireDetected.png', description: 'Fire Detected.', color: 'red' },
        { icon: 'FDSFireDetected.png', description: 'Fire Detected at Panel.', color: 'red' },
        { icon: 'FDSFireDetected.png', description: 'Fire detected at passenger area / Toilet.', color: 'red' },
        { icon: 'FDSFireAlert1.png', description: 'Alert detected at passenger area / Toilet.', color: 'yellow' },
        { icon: 'FDSFireAlert1.png', description: 'Fault detected at passenger area / Toilet.', color: 'yellow' },
        { icon: 'FDSFirenocommunication.png', description: 'No Communication from TDS to CCMS.', color: '#C3C3C3' }
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
                    <div className="train-number title">FIRE LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {fireLegendStates.map((item, index) => (
                        <div key={index} className="equipment-item">
                            <div className="icon" style={{background:`${item.color}`}}>
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

export default Fire;
