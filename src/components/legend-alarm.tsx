import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
const Alarm = () => {
    const passengerAlarmStates = [
        { icon: 'Alarm_Uknown.png', description: 'Passenger Alarm Circuit is OK (Ready for operation).', color: 'lightgray' },
        { icon: 'Alarm_MCB_Off.png', description: 'Passenger Alarm MCB is OFF/Tripped in any of the coaches of the basic unit.', color: 'yellow' },
        { icon: 'Alarm_Trig.png', description: 'Passenger Alarm is triggered (can be in any of the coaches in a basic unit).', color: 'red' },
        { icon: 'Alarm_Uknown.png', description: 'Passenger Alarm status unknown.', color: 'gray' }
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
                    <div className="train-number title">PASSENGER ALARM LEGEND INFORMATION</div>
                    <div className="title"></div>
                </div>
                <div className="equipment-list">
                    {passengerAlarmStates.map((item, index) => (
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

export default Alarm;
