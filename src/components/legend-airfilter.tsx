import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Filter = () => {
    const filterStatusStates = [
        { icon: 'air-filter.png', description: 'Air Filter is Clear.', color: 'white' },
        { icon: 'AirFilter_Clogged.png', description: 'Air Filter is Clogged.', color: 'red' }
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
                    <div className="train-number title">FILTER STATUS LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {filterStatusStates.map((item, index) => (
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

export default Filter;
