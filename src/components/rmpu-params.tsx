import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Row {
    parameter: string;
    RMPU1: string;
    RMPU2: string;
}

const PARAMS: React.FC = () => {
    const { id, option, train } = useParams<{ train: string, id: string, option: string }>();
    console.log(option);

    const [currentDateTime, setCurrentDateTime] = useState({
        date: '',
        time: ''
    });

    // Function to format date and time
    const formatDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-GB'); // dd/mm/yy format
        const time = now.toLocaleTimeString('en-GB', { hour12: false }); // hh:mm:ss format (24 hr)
        setCurrentDateTime({ date, time });
    };

    useEffect(() => {
        // Set the initial date and time
        formatDateTime();

        // Optionally, update the time every second
        const interval = setInterval(() => {
            formatDateTime();
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const myMap = new Map();

    myMap.set('BU-10', 12345);
    myMap.set('BU-20', 12346);
    myMap.set('BU-30', 12347);
    myMap.set('BU-40', 12348);
    myMap.set('BU-50', 12349);
    myMap.set('BU-60', 12350);

    const data: Row[] = [
        { parameter: "Hvac Mode", RMPU1: "No Mode", RMPU2: "No Mode" },
        { parameter: "Air Co On/Off", RMPU1: "ON", RMPU2: "ON" },
        { parameter: "Blower", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Blower VFD", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Compressor 1", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Compressor 2", RMPU1: "ON", RMPU2: "ON" },
        { parameter: "Compressor VFD", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Condenser Fan 1", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Control Pressure SW", RMPU1: "Inactive", RMPU2: "Inactive" },
        { parameter: "Fresh Air Damper-1", RMPU1: "Open", RMPU2: "Close" },
        { parameter: "Fresh Air Damper-2", RMPU1: "Open", RMPU2: "Close" },
        { parameter: "UV Lamp Indication", RMPU1: "ON", RMPU2: "OFF" },
        { parameter: "Return Air Damper -1", RMPU1: "Open", RMPU2: "Close" },
        { parameter: "Heater", RMPU1: "Off", RMPU2: "Off" },
        { parameter: "HVAC Fault", RMPU1: "Healthy", RMPU2: "Healthy" },
        { parameter: "RH Activation", RMPU1: "OFF", RMPU2: "OFF" },
        { parameter: "Internal Temp", RMPU1: "0.00°C", RMPU2: "0.00°C" },
        { parameter: "Ambient Temp", RMPU1: "0.00°C", RMPU2: "0.00°C" },
        { parameter: "Diff.Press.Switch", RMPU1: "ON", RMPU2: "ON" },
        { parameter: "LP1 Pressure", RMPU1: "NOK", RMPU2: "NOK" },
        { parameter: "LP2 Pressure", RMPU1: "NOK", RMPU2: "NOK" },
        { parameter: "HP1 Pressure", RMPU1: "NOK", RMPU2: "NOK" },
        { parameter: "HP2 Pressure", RMPU1: "NOK", RMPU2: "NOK" },
        { parameter: "400 V AC", RMPU1: "OK", RMPU2: "OK" },
        { parameter: "Clogging Filter Indication", RMPU1: "NOK", RMPU2: "NOK" },
        { parameter: "Set Point", RMPU1: "4", RMPU2: "4" }
    ];

    const getClassName = (value: string): string => {
        switch (value) {
            case "ON":
                return "on";
            case "OFF":
            case "Off":
                return "off";
            case "Inactive":
                return "inactive";
            case "Healthy":
                return "healthy";
            case "Open":
                return "open";
            case "Close":
                return "close";
            case "NOK":
                return "nok";
            case "NA":
                return "na";
            default:
                return "";
        }
    };

    return (
        <IonPage>

            <IonContent>
                <div className='full-height'>
                    <div className="heading-first">

                        <IonRouterLink className="train-number button" routerLink='/trains'>{train}</IonRouterLink>

                        <IonRouterLink routerLink={`/${train}/home`} className="title"><div>HOMEPAGE</div></IonRouterLink>
                    </div>
                    <div className="heading-first">
                        <IonRouterLink routerLink={`/${train}/second/${id}`} className="train-number title">{id.slice(0, 2) + id.slice(3)}-{option}</IonRouterLink>
                        <div className="title">
                            <div className="button">{myMap.get(`${id}0`)}</div>
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>HVAC Unit</th>
                                    <th>RMPU1</th>
                                    <th>TIME</th>
                                    <th>RMPU2</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td style={{width:'20%'}}>{row.parameter}</td>
                                        <td className={getClassName(row.RMPU1)}>{row.RMPU1}</td>
                                        <td>{currentDateTime.time}</td>
                                        <td className={getClassName(row.RMPU2)}>{row.RMPU2}</td>
                                        <td>{currentDateTime.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link to='/legend' className="legendBtn">
                        <div style={{ position: 'fixed', bottom: '50px', right: '20px' }} className="button">LEGENDS</div>
                    </Link>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default PARAMS;
