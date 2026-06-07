import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Compressor = () => {
    const compressorStates = [
        { icon: 'C1.png', description: 'RMPU Compressor 1 ON.', color: 'lightblue' },
        { icon: 'C1.png', description: 'RMPU Compressor 1 is ready for operation.', color: 'gray' },
        { icon: 'C1.png', description: 'RMPU Compressor 1 is not ready for operation.', color: 'black' },
        { icon: 'C2.png', description: 'RMPU Compressor 2 ON.', color: 'lightblue' },
        { icon: 'C2.png', description: 'RMPU Compressor 2 is ready for operation.', color: 'gray' },
        { icon: 'C2.png', description: 'RMPU Compressor 2 is not ready for operation.', color: 'black' }
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
                    <div className="train-number title">RMPU COMPRESSOR LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {compressorStates.map((item, index) => (
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

export default Compressor;
