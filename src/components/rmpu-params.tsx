import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonIcon,IonRouterLink } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from './backButton';
import LegendButton from './legendButton';
import { home } from 'ionicons/icons';
import {
    fetchCCMSData,
    HVAC_MODE,
    ON_OFF,
    OPEN_CLOSE,
    ACTIVE,
    HEALTH,
    OK_NOK
} from '../services/ccmsApi';

interface Row {
    parameter: string;
    RMPU1: string;
    RMPU2: string;
}

const PARAMS: React.FC = () => {
    const { id, option, train } = useParams<{ train: string, id: string, option: string }>();
    console.log(option);

    const [ccmsData, setCcmsData] = useState<any>(null);

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

        const loadData = async () => {
            try {
                const data = await fetchCCMSData();
                setCcmsData(data);
            } catch (err) {
                console.error(err);
            }
        };

        formatDateTime();

        loadData();

        const clockInterval = setInterval(() => {
            formatDateTime();
        }, 1000);

        const dataInterval = setInterval(() => {
            loadData();
        }, 5000);

        return () => {
            clearInterval(clockInterval);
            clearInterval(dataInterval);
        };

    }, []);

    const myMap = new Map();

    myMap.set('BU-10', 12345);
    myMap.set('BU-20', 12346);
    myMap.set('BU-30', 12347);
    myMap.set('BU-40', 12348);
    myMap.set('BU-50', 12349);
    myMap.set('BU-60', 12350);

    const data: Row[] = ccmsData ? [
        {
            parameter: "Hvac Mode",
            RMPU1: HVAC_MODE[ccmsData.rmpu1Mode] || "Unknown",
            RMPU2: HVAC_MODE[ccmsData.rmpu2Mode] || "Unknown"
        },
        {
            parameter: "Air Co On/Off",
            RMPU1: ON_OFF(ccmsData.airCo1),
            RMPU2: ON_OFF(ccmsData.airCo2)
        },
        {
            parameter: "Blower",
            RMPU1: ON_OFF(ccmsData.blower1),
            RMPU2: ON_OFF(ccmsData.blower2)
        },
        {
            parameter: "Blower VFD",
            RMPU1: ON_OFF(ccmsData.blowerVfd1),
            RMPU2: ON_OFF(ccmsData.blowerVfd2)
        },
        {
            parameter: "Compressor 1",
            RMPU1: ON_OFF(ccmsData.compressor1_1),
            RMPU2: ON_OFF(ccmsData.compressor1_2)
        },
        {
            parameter: "Compressor 2",
            RMPU1: ON_OFF(ccmsData.compressor2_1),
            RMPU2: ON_OFF(ccmsData.compressor2_2)
        },
        {
            parameter: "Compressor VFD",
            RMPU1: ON_OFF(ccmsData.compressorVfd1),
            RMPU2: ON_OFF(ccmsData.compressorVfd2)
        },
        {
            parameter: "Condenser Fan 1",
            RMPU1: ON_OFF(ccmsData.condenserFan1_1),
            RMPU2: ON_OFF(ccmsData.condenserFan1_2)
        },
        {
            parameter: "Control Pressure SW",
            RMPU1: ACTIVE(ccmsData.controlPressure1),
            RMPU2: ACTIVE(ccmsData.controlPressure2)
        },
        {
            parameter: "Fresh Air Damper-1",
            RMPU1: OPEN_CLOSE(ccmsData.freshAirDamper1_1),
            RMPU2: OPEN_CLOSE(ccmsData.freshAirDamper1_2)
        },
        {
            parameter: "Fresh Air Damper-2",
            RMPU1: OPEN_CLOSE(ccmsData.freshAirDamper2_1),
            RMPU2: OPEN_CLOSE(ccmsData.freshAirDamper2_2)
        },
        {
            parameter: "UV Lamp Indication",
            RMPU1: ON_OFF(ccmsData.uvLamp1),
            RMPU2: ON_OFF(ccmsData.uvLamp2)
        },
        {
            parameter: "Return Air Damper -1",
            RMPU1: OPEN_CLOSE(ccmsData.returnDamper1_1),
            RMPU2: OPEN_CLOSE(ccmsData.returnDamper1_2)
        },
        {
            parameter: "Heater",
            RMPU1: ON_OFF(ccmsData.heater1),
            RMPU2: ON_OFF(ccmsData.heater2)
        },
        {
            parameter: "HVAC Fault",
            RMPU1: HEALTH(ccmsData.hvacFault1),
            RMPU2: HEALTH(ccmsData.hvacFault2)
        },
        {
            parameter: "RH Activation",
            RMPU1: ON_OFF(ccmsData.rhActivation1),
            RMPU2: ON_OFF(ccmsData.rhActivation2)
        },
        {
            parameter: "Internal Temp",
            RMPU1: `${ccmsData.internalTemp1}°C`,
            RMPU2: `${ccmsData.internalTemp2}°C`
        },
        {
            parameter: "Ambient Temp",
            RMPU1: `${ccmsData.ambientTemp1}°C`,
            RMPU2: `${ccmsData.ambientTemp2}°C`
        },
        {
            parameter: "Diff.Press.Switch",
            RMPU1: ON_OFF(ccmsData.diffPressure1),
            RMPU2: ON_OFF(ccmsData.diffPressure2)
        },
        {
            parameter: "LP1 Pressure",
            RMPU1: OK_NOK(ccmsData.lp1Pressure1),
            RMPU2: OK_NOK(ccmsData.lp1Pressure2)
        },
        {
            parameter: "LP2 Pressure",
            RMPU1: OK_NOK(ccmsData.lp2Pressure1),
            RMPU2: OK_NOK(ccmsData.lp2Pressure2)
        },
        {
            parameter: "HP1 Pressure",
            RMPU1: OK_NOK(ccmsData.hp1Pressure1),
            RMPU2: OK_NOK(ccmsData.hp1Pressure2)
        },
        {
            parameter: "HP2 Pressure",
            RMPU1: OK_NOK(ccmsData.hp2Pressure1),
            RMPU2: OK_NOK(ccmsData.hp2Pressure2)
        },
        {
            parameter: "400 V AC",
            RMPU1: OK_NOK(ccmsData.ac400v1),
            RMPU2: OK_NOK(ccmsData.ac400v2)
        },
        {
            parameter: "Clogging Filter Indication",
            RMPU1: OK_NOK(ccmsData.cloggingFilter1),
            RMPU2: OK_NOK(ccmsData.cloggingFilter2)
        },
        {
            parameter: "Set Point",
            RMPU1: `${ccmsData.setPoint1}`,
            RMPU2: `${ccmsData.setPoint2}`
        }
    ] : [];
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

                        <IonRouterLink
                            routerLink="/trains"
                            className="train-number"
                            style={{
                                textDecoration: 'none',
                                color: 'yellow',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {train || '22665'}
                        </IonRouterLink>

                       <IonRouterLink
    routerLink={`/trains`}
    className="title"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit"
    }}
>
    <IonIcon
        icon={home}
        style={{
            fontSize: "30px",
            color: "white"
        }}
    />
</IonRouterLink>
                    </div>
                    <div className="heading-first">
                        <IonRouterLink routerLink={`/${train}/second/${id}`} className="train-number title">{id.slice(0, 2) + id.slice(3)}-{option}</IonRouterLink>
                        <div className="title">
                            <div className="button">{myMap.get(`${id}0`)}</div>
                        </div>
                    </div>
                    <div
                        className="table-container"
                        style={{
                            width: '100%',
                            overflow: 'hidden'
                        }}
                    >
                        <table
                            style={{
                                width: '100%',
                                tableLayout: 'fixed',
                                borderCollapse: 'collapse'
                            }}
                        >
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '32%',
                                            padding: '3px',
                                            fontSize: '11px'
                                        }}
                                    >
                                        HVAC Unit
                                    </th>

                                    <th
                                        style={{
                                            width: '17%',
                                            padding: '3px',
                                            fontSize: '11px'
                                        }}
                                    >
                                        RMPU1
                                    </th>

                                    <th
                                        style={{
                                            width: '17%',
                                            padding: '3px',
                                            fontSize: '11px'
                                        }}
                                    >
                                        TIME
                                    </th>

                                    <th
                                        style={{
                                            width: '17%',
                                            padding: '3px',
                                            fontSize: '11px'
                                        }}
                                    >
                                        RMPU2
                                    </th>

                                    <th
                                        style={{
                                            width: '17%',
                                            padding: '3px',
                                            fontSize: '11px'
                                        }}
                                    >
                                        TIME
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            height: '34px'   // Increase to 36, 38, 40px if needed
                                        }}
                                    >

                                        <td
                                            style={{
                                                width: '32%',
                                                padding: '3px 6px',
                                                fontSize: '10px',
                                                wordBreak: 'break-word',
                                                whiteSpace: 'normal',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            {row.parameter}
                                        </td>

                                        <td
                                            className={getClassName(row.RMPU1)}
                                            style={{
                                                padding: '3px',
                                                fontSize: '10px',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            {row.RMPU1}
                                        </td>

                                        <td
                                            style={{
                                                padding: '3px',
                                                fontSize: '9px',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            {currentDateTime.time.slice(0, 5)}
                                        </td>

                                        <td
                                            className={getClassName(row.RMPU2)}
                                            style={{
                                                padding: '3px',
                                                fontSize: '10px',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            {row.RMPU2}
                                        </td>

                                        <td
                                            style={{
                                                padding: '3px',
                                                fontSize: '9px',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            {currentDateTime.time.slice(0, 5)}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <LegendButton />
                </div>
            </IonContent>
            <BackButton />
        </IonPage>
    );
}

export default PARAMS;
