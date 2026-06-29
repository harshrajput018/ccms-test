import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import spare from '../Images/spare.png'
import AlarmOk from '../Images/Alarm_Ok.png';
import RMPSmoke1 from '../Images/RMPSmoke1.png';
import bulb_LL2_O from '../Images/bulb_LL2_O.png';
import Blower from '../Images/Blower.png';
import BlowerBlue from '../Images/Blower_Blue.png';
import FDSFire from '../Images/FDSFire.png';
import C1 from '../Images/C1.png';
import C2 from '../Images/C2.png';
import Condenser2 from '../Images/Condensor2.png';
import VFDReady from '../Images/fresh-air-damper.png';
import VFDon from '../Images/FreshAirDamper_Closed.png';
import uvLampGrey from '../Images/uv-lamp.png';
import uvLampBlue from '../Images/UV Lamp ON.png';
import D_CF from '../Images/Heater Not Ready.png';
import D_CL from '../Images/heater.png';
import airFilterClogged from '../Images/AirFilter_Clogged.png';
import airFilter from '../Images/air-filter.png';
import BackButton from './backButton';

const SYMBOLS: React.FC = () => {
  const { id, option, train } = useParams<{ train: string, id: string, option: string }>();

  const indicesToCheck = [2, 3, 6, 17, 19,];
  const images = [spare, RMPSmoke1, spare, spare, Blower, RMPSmoke1, BlowerBlue, spare, C1, C2, C1, C2, Condenser2, Condenser2, Condenser2, Condenser2, VFDReady, VFDon, uvLampGrey, uvLampBlue, D_CF, D_CL, airFilterClogged, airFilter];


  const myMap = new Map();

    myMap.set('BU-10', 12345);
    myMap.set('BU-20', 12346);
    myMap.set('BU-30', 12347);
    myMap.set('BU-40', 12348);
    myMap.set('BU-50', 12349);
    myMap.set('BU-60', 12350);

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
          <div className="images-container">
            {images.map((item, index) => (
              <div className="image-wrapper" key={index}>
                {!(item === spare) && <div>
                  <div className="top-left corner-text">{index == 5 || index == 6 || index == 10 || index == 11 || index == 14 || index == 15 || index == 17 || index == 19 || index == 21 || index == 23 ? 'R2': 'R1'}</div>
                  {index == 1 || index == 5 ? <div className="top-right corner-text">Smoke</div> : ''}</div>}

                <img
                  className={`symbols ${indicesToCheck.includes(index) && item !== spare ? 'highlighted' : ''}`}
                  src={item}
                  alt=""
                />
              </div>

            ))}
          </div>
        </div>
      </IonContent>
      <BackButton />
    </IonPage>
  );
}

export default SYMBOLS;
