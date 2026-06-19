import {
    IonPage,
    IonContent,
    IonRouterLink
} from "@ionic/react";
import BackButton from "./backButton";

const EquipmentList = () => {

    const items = [
        {
            icon: "auxiliary-converter.png",
            name: "Auxiliary Converter",
            link: "/legend-aux"
        },
        {
            icon: "rmpu.png",
            name: "RMPU",
            link: "/legend-rmpu"
        },
        {
            icon: "door.png",
            name: "Door",
            link: "/legend-door"
        },
        {
            icon: "blower.png",
            name: "Blower",
            link: "/legend-blower"
        },
        {
            icon: "condenser.png",
            name: "Condenser",
            link: "/legend-condenser"
        },
        {
            icon: "fds-fire.png",
            name: "FDS Fire",
            link: "/legend-fire"
        },
        {
            icon: "rmpu-compressor.png",
            name: "RMPU Compressor",
            link: "/legend-compressor"
        },
        {
            icon: "rmpu-smoke.png",
            name: "RMPU Smoke",
            link: "/legend-smoke"
        },
        {
            icon: "vfd.png",
            name: "VFD",
            link: "/legend-vfd"
        },
        {
            icon: "passenger-light.png",
            name: "Passenger Light",
            link: "/legend-light"
        },
        {
            icon: "air-filter.png",
            name: "Air Filter",
            link: "/legend-airfilter"
        },
        {
            icon: "passenger-alarm.png",
            name: "Passenger Alarm",
            link: "/legend-alarm"
        },
        {
            icon: "fresh-air-damper.png",
            name: "Fresh Air Damper",
            link: "/legend-airdamper"
        },
        {
            icon: "heater.png",
            name: "Heater",
            link: "/legend-heater"
        },
        {
            icon: "uv-lamp.png",
            name: "UV Lamp",
            link: "/legend-uvlamp"
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
        textDecoration: 'none',
        color: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}
>
    22665
</IonRouterLink>

                    <div className="title">
                        <div>HOMEPAGE</div>
                    </div>
                </div>

                <div className="heading-first">
                    <div className="train-number title">
                        LEGENDS
                    </div>

                    <div className="title"></div>
                </div>

                <div className="equipment-list">

                    {items.map((item, index) => (

                        <div
                            key={index}
                            className="equipment-item"
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

                            <IonRouterLink
                                routerLink={item.link}
                                className="name"
                            >
                                {item.name}
                            </IonRouterLink>

                        </div>

                    ))}

                </div>

            </IonContent>
        <BackButton />
        </IonPage>
    );
};

export default EquipmentList;