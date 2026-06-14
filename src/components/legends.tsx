import { IonPage, IonContent, IonButton, IonImg, IonRouterLink } from "@ionic/react";
import { Link } from "react-router-dom";
import "../components/ExploreContainer.css"; // Assuming you have your styles here
import acNotImg from '../Images/Ac not.png';
import rmRmImg from '../Images/RM_RM.png';
import doorCommFailureImg from '../Images/Door_Comm_Failure.png';
import blowerImg from '../Images/Blower.png';
import condenserImg from '../Images/Condensor2.png';
import fdsFireImg from '../Images/FDSFire.png';
import rmpsSmokeImg from '../Images/RMPSmoke1.png';
import vfdReadyImg from '../Images/VFDReady.png';
import bulbRImg from '../Images/bulb_R.png';
import alarmOkImg from '../Images/Alarm_Ok.png';

const Legend: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="full-height">
          <div className="heading-first">
            <div className="train-number"><div>22665</div></div>
            <div className="title"><div>HOMEPAGE</div></div>
          </div>
          <div className="heading-first">
            <div className="train-number title">LEGENDS</div>
            <div className="title"></div>
          </div>

          <div className="heading-first">
            <div className="train-number title"></div>
            <div className="title"></div>
          </div>
          <div className="legendSection">
            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={acNotImg}
                alt=""
              />
              <IonRouterLink style={{ color: "white", textDecoration: "none" }} routerLink={'/legend-aux'}>Auxilary Converter</IonRouterLink>
            </div>

            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={rmRmImg}
                alt=""
              />
              <Link style={{ color: "white", textDecoration: "none" }} to={'/legend-rmpu'}>RMPU</Link>
            </div>

            {/* <div className="leg">
            <IonImg className="legendIcon"
              style={{ width: '50px' }}
              src={doorCommFailureImg}
              alt=""
            />
            <Link style={{ color: "white", textDecoration: "none" }} to={'/legend-blower'}>Door</Link>
          </div> */}

            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={blowerImg}
                alt=""
              />
              <Link style={{ color: "white", textDecoration: "none" }} to={'/legend-blower'}>Blower</Link>
            </div>

            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={condenserImg}
                alt=""
              />
              <Link style={{ color: "white", textDecoration: "none" }} to={'/legend-condenser'}>Condenser</Link>
            </div>

            {/* <div className="leg">
            <IonImg className="legendIcon"
              style={{ width: '50px' }}
              src={fdsFireImg}
              alt=""
            />
            <Link style={{ color: "white", textDecoration: "none" }} to={'/legend/condenser'}>FDS Fire</Link>
          </div> */}

            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={rmpsSmokeImg}
                alt=""
              />
              <IonRouterLink style={{ color: "white", textDecoration: "none" }} routerLink={'/legend-smoke'}> RMPU Smoke</IonRouterLink>
            </div>

            <div className="leg">
              <IonImg className="legendIcon"
                style={{ width: '50px' }}
                src={vfdReadyImg}
                alt=""
              />
              <IonRouterLink style={{ color: "white", textDecoration: "none" }} routerLink={'/legend-vfd'}>VFD</IonRouterLink>
            </div>

            {/* <div className="leg">
            <IonImg className="legendIcon"
              style={{ width: '50px' }}
              src={bulbRImg}
              alt=""
            />
            <Link style={{ color: "white", textDecoration: "none" }} to={'/legend/condenser'}>Passenger Light</Link>
          </div> */}

            {/* <div className="leg">
            <IonImg className="legendIcon"
              style={{ width: '50px' }}
              src={alarmOkImg}
              alt=""
            />
            <Link style={{ color: "white", textDecoration: "none" }} to={'/legend/condenser'}>Passenger ALarm</Link>
          </div> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Legend;
