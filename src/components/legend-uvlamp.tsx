import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Lamp = () => {
    const uvLampStates = [
        { icon: 'uv-lamp.png', description: 'UV Lamp OFF.', color: 'gray' },
        { icon: 'UV Lamp ON.png', description: 'UV Lamp ON.', color: 'lightblue' }
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
                    <div className="train-number title">UV LAMP LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {uvLampStates.map((item, index) => (
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

export default Lamp;
