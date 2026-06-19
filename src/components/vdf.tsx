import React from 'react';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

import RMPU1_C_V_O from '../Images/RMPU1_C_V_O.png';
import RMPU1_C_V_NR from '../Images/RMPU1_C_V_NR.png';
import RMPU1_C_V_R from '../Images/RMPU1_C_V_R.png';
import RMPU1_C_V_F from '../Images/RMPU1_C_V_F.png';
import RMPU1_C_V_U from '../Images/RMPU1_C_V_U.png';

import RMPU2_C_V_O from '../Images/RMPU2_C_V_O.png';
import RMPU2_C_V_NR from '../Images/RMPU2_C_V_NR.png';
import RMPU2_C_V_R from '../Images/RMPU2_C_V_R.png';
import RMPU2_C_V_F from '../Images/RMPU2_C_V_F.png';
import RMPU2_C_V_U from '../Images/RMPU2_C_V_U.png';

import RMPU1_B_V_O from '../Images/RMPU1_B_V_O.png';
import RMPU1_B_V_NR from '../Images/RMPU1_B_V_NR.png';
import RMPU1_B_V_R from '../Images/RMPU1_B_V_R.png';
import RMPU1_B_V_F from '../Images/RMPU1_B_V_F.png';
import RMPU1_B_V_U from '../Images/RMPU1_B_V_U.png';

import RMPU2_B_V_O from '../Images/RMPU2_B_V_O.png';
import RMPU2_B_V_NR from '../Images/RMPU2_B_V_NR.png';
import RMPU2_B_V_R from '../Images/RMPU2_B_V_R.png';
import RMPU2_B_V_F from '../Images/RMPU2_B_V_F.png';
import RMPU2_B_V_U from '../Images/RMPU2_B_V_U.png';
import BackButton from './backButton';

const VFDIcon: React.FC = () => {

  const vfdStatuses = [

    // RMPU 1 Compressor VFD

    {
      img: RMPU1_C_V_O,
      description: 'RMPU 1 Compressor VFD is ON'
    },
    {
      img: RMPU1_C_V_NR,
      description: 'RMPU 1 Compressor VFD is Not ready for operation'
    },
    {
      img: RMPU1_C_V_R,
      description: 'RMPU 1 Compressor VFD is ready for operation'
    },
    {
      img: RMPU1_C_V_F,
      description: 'RMPU 1 Compressor VFD is Faulty'
    },
    {
      img: RMPU1_C_V_U,
      description: 'RMPU 1 Compressor VFD Status Unknown/Invalid'
    },

    // RMPU 2 Compressor VFD

    {
      img: RMPU2_C_V_O,
      description: 'RMPU 2 Compressor VFD is ON'
    },
    {
      img: RMPU2_C_V_NR,
      description: 'RMPU 2 Compressor VFD is Not ready for operation'
    },
    {
      img: RMPU2_C_V_R,
      description: 'RMPU 2 Compressor VFD is ready for operation'
    },
    {
      img: RMPU2_C_V_F,
      description: 'RMPU 2 Compressor VFD is Faulty'
    },
    {
      img: RMPU2_C_V_U,
      description: 'RMPU 2 Compressor VFD Status Unknown/Invalid'
    },

    // RMPU 1 Blower VFD

    {
      img: RMPU1_B_V_O,
      description: 'RMPU 1 Blower VFD is ON'
    },
    {
      img: RMPU1_B_V_NR,
      description: 'RMPU 1 Blower VFD is Not ready for operation'
    },
    {
      img: RMPU1_B_V_R,
      description: 'RMPU 1 Blower VFD is ready for operation'
    },
    {
      img: RMPU1_B_V_F,
      description: 'RMPU 1 Blower VFD is Faulty'
    },
    {
      img: RMPU1_B_V_U,
      description: 'RMPU 1 Blower VFD Status Unknown/Invalid'
    },

    // RMPU 2 Blower VFD

    {
      img: RMPU2_B_V_O,
      description: 'RMPU 2 Blower VFD is ON'
    },
    {
      img: RMPU2_B_V_NR,
      description: 'RMPU 2 Blower VFD is Not ready for operation'
    },
    {
      img: RMPU2_B_V_R,
      description: 'RMPU 2 Blower VFD is ready for operation'
    },
    {
      img: RMPU2_B_V_F,
      description: 'RMPU 2 Blower VFD is Faulty'
    },
    {
      img: RMPU2_B_V_U,
      description: 'RMPU 2 Blower VFD Status Unknown/Invalid'
    }

  ];

  return (
    <IonPage>

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
    {'22665'}
</IonRouterLink>

        <div className="title">
          <div className="button">HOMEPAGE</div>
        </div>
      </div>

      <div className="heading-first">
        <div className="train-number title">
          <div className="button">
            VFD LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {vfdStatuses.map((info, index) => (

            <div
              key={index}
              className="equipment-item"
            >

              <div
                className="icon"
                style={{
                  width: "50px",
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
                  src={info.img}
                  alt="vfd"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block"
                  }}
                />

              </div>

              <div className="name">
                {info.description}
              </div>

            </div>

          ))}

        </div>

      </IonContent>
    <BackButton />
    </IonPage>
  );
};

export default VFDIcon;