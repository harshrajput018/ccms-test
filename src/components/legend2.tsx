import {
    IonPage,
    IonContent,
    IonRouterLink,
    IonIcon
} from "@ionic/react";
import { home } from "ionicons/icons";
import { useParams } from "react-router-dom";
import BackButton from "./backButton";

const EquipmentList = () => {

    const { train } = useParams<{ train: string }>();

    const items = [
        {
            icon: "auxiliary-converter.png",
            name: "Auxiliary Converter",
            link: `/${train}/legend-aux`
        },
        {
            icon: "rmpu.png",
            name: "RMPU",
            link: `/${train}/legend-rmpu`
        },
        {
            icon: "door.png",
            name: "Door",
            link: `/${train}/legend-door`
        },
        {
            icon: "blower.png",
            name: "Blower",
            link: `/${train}/legend-blower`
        },
        {
            icon: "condenser.png",
            name: "Condenser",
            link: `/${train}/legend-condenser`
        },
        {
            icon: "fds-fire.png",
            name: "FDS Fire",
            link: `/${train}/legend-fire`
        },
        {
            icon: "rmpu-compressor.png",
            name: "RMPU Compressor",
            link: `/${train}/legend-compressor`
        },
        {
            icon: "rmpu-smoke.png",
            name: "RMPU Smoke",
            link: `/${train}/legend-smoke`
        },
        {
            icon: "vfd.png",
            name: "VFD",
            link: `/${train}/legend-vfd`
        },
        {
            icon: "passenger-light.png",
            name: "Passenger Light",
            link: `/${train}/legend-light`
        },
        {
            icon: "air-filter.png",
            name: "Air Filter",
            link: `/${train}/legend-airfilter`
        },
        {
            icon: "passenger-alarm.png",
            name: "Passenger Alarm",
            link: `/${train}/legend-alarm`
        },
        {
            icon: "fresh-air-damper.png",
            name: "Fresh Air Damper",
            link: `/${train}/legend-airdamper`
        },
        {
            icon: "heater.png",
            name: "Heater",
            link: `/${train}/legend-heater`
        },
        {
            icon: "uv-lamp.png",
            name: "UV Lamp",
            link: `/${train}/legend-uvlamp`
        }
    ];

    return (
        <IonPage>
            <IonContent>

                <div className="heading-first">

                    <IonRouterLink
                        routerLink="/trains"
                        className="train-number"
                        style={{
                            textDecoration: "none",
                            color: "yellow",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        LEGENDS
                    </IonRouterLink>

                    <div className="title">

                        <IonRouterLink
                            routerLink={`/trains`}
                            className="title"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "inherit",
                                width: "100%",
                                height: "100%"
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

                </div>

                <div className="equipment-list">

                    {items.map((item, index) => (

                        <IonRouterLink
                            key={index}
                            routerLink={item.link}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                display: "block"
                            }}
                        >

                            <div
                                className="equipment-item"
                                style={{
                                    cursor: "pointer"
                                }}
                            >

                                <div
                                    className="icon"
                                    style={{
                                        width: "55px",
                                        height: "40px",
                                        border: "2px solid white",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexShrink: 0,
                                        margin: "4px",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        padding: 0
                                    }}
                                >
                                    <img
                                        src={`/Images/${item.icon}`}
                                        alt={item.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill",
                                            display: "block"
                                        }}
                                    />
                                </div>

                                <div className="name">
                                    {item.name}
                                </div>

                            </div>

                        </IonRouterLink>

                    ))}

                </div>

            </IonContent>

            <BackButton />

        </IonPage>
    );
};

export default EquipmentList;