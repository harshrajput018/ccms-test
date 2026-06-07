import { IonPage, IonContent, IonRouterLink } from '@ionic/react';
import { useParams } from 'react-router-dom';
import spare from '../FinalImage/spare.png'
import AlarmOk from '../FinalImage/Alarm_Ok.png';
import RMPSmoke1 from '../FinalImage/RMPSmoke1.png';
import bulb_LL2_O from '../FinalImage/bulb_LL2_O.png';
import Blower from '../FinalImage/Blower.png';
import BlowerBlue from '../FinalImage/Blower_Blue.png';
import FDSFire from '../FinalImage/FDSFire.png';
import C1 from '../FinalImage/C1.png';
import C2 from '../FinalImage/C2.png';
import Condenser2 from '../FinalImage/Condensor2.png';
import VFDReady from '../NewImages/fresh-air-damper.png';
import VFDon from '../NewImages/FreshAirDamper_Closed.png';
import uvLampGrey from '../NewImages/uv-lamp.png';
import uvLampBlue from '../NewImages/UV Lamp ON.png';
import D_CF from '../NewImages/Heater Not Ready.png';
import D_CL from '../NewImages/heater.png';
import airFilterClogged from '../NewImages/AirFilter_Clogged.png';
import airFilter from '../NewImages/air-filter.png';

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
          <IonRouterLink className="train-number button" routerLink='/trains'>{train}</IonRouterLink>
            <IonRouterLink routerLink={`/${train}/home`} className="title"><div>HOMEPAGE</div></IonRouterLink>
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
    </IonPage>
  );
}

export default SYMBOLS;
