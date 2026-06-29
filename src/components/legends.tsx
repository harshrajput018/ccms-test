import {
  IonPage,
  IonContent,
  IonImg,
  IonRouterLink
} from "@ionic/react";

import "../components/ExploreContainer.css";

import acNotImg from '../Images/Ac not.png';
import rmRmImg from '../Images/RM_RM.png';
import blowerImg from '../Images/Blower.png';
import condenserImg from '../Images/Condensor2.png';
import rmpsSmokeImg from '../Images/RMPSmoke1.png';
import vfdReadyImg from '../Images/VFDReady.png';

const Legend: React.FC = () => {

  return (
    <IonPage>

      <IonContent>

        <div className="full-height">

          <div className="heading-first">
            <div className="train-number">
              <div>22665</div>
            </div>

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

          <div className="heading-first">
            <div className="train-number title"></div>
            <div className="title"></div>
          </div>

          <div className="legendSection">

            <IonRouterLink
              routerLink="/legend-aux"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={acNotImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                Auxiliary Converter
              </span>
            </IonRouterLink>

            <IonRouterLink
              routerLink="/legend-rmpu"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={rmRmImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                RMPU
              </span>
            </IonRouterLink>

            <IonRouterLink
              routerLink="/legend-blower"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={blowerImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                Blower
              </span>
            </IonRouterLink>

            <IonRouterLink
              routerLink="/legend-condenser"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={condenserImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                Condenser
              </span>
            </IonRouterLink>

            <IonRouterLink
              routerLink="/legend-smoke"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={rmpsSmokeImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                RMPU Smoke
              </span>
            </IonRouterLink>

            <IonRouterLink
              routerLink="/legend-vfd"
              className="leg"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <IonImg
                className="legendIcon"
                style={{ width: "50px" }}
                src={vfdReadyImg}
                alt=""
              />
              <span style={{ marginLeft: "12px", fontSize: "18px" }}>
                VFD
              </span>
            </IonRouterLink>

          </div>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default Legend;