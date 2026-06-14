import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

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

const VFDIcon: React.FC = () => {

  const vfdStatuses = [

    {
      img: RMPU1_C_V_O,
      description: 'HVAC 1 Compressor VFD is ON'
    },
    {
      img: RMPU1_C_V_NR,
      description: 'HVAC 1 Compressor VFD is Not ready for operation'
    },
    {
      img: RMPU1_C_V_R,
      description: 'HVAC 1 Compressor VFD is ready for operation'
    },
    {
      img: RMPU1_C_V_F,
      description: 'HVAC 1 Compressor VFD is Faulty'
    },
    {
      img: RMPU1_C_V_U,
      description: 'HVAC 1 Compressor VFD Status Unknown/Invalid'
    },

    {
      img: RMPU1_B_V_O,
      description: 'HVAC 1 Blower CONV. is ON'
    },
    {
      img: RMPU1_B_V_NR,
      description: 'HVAC 1 Blower CONV. is Not ready for operation'
    },
    {
      img: RMPU1_B_V_R,
      description: 'HVAC 1 Blower CONV. is ready for operation'
    },
    {
      img: RMPU1_B_V_F,
      description: 'HVAC 1 Blower CONV. is Faulty'
    },
    {
      img: RMPU1_B_V_U,
      description: 'HVAC 1 Blower CONV. Status Unknown/Invalid'
    },

    {
      img: RMPU2_C_V_O,
      description: 'HVAC 2 Compressor VFD is ON'
    },
    {
      img: RMPU2_C_V_NR,
      description: 'HVAC 2 Compressor VFD is Not ready for operation'
    },
    {
      img: RMPU2_C_V_R,
      description: 'HVAC 2 Compressor VFD is ready for operation'
    },
    {
      img: RMPU2_C_V_F,
      description: 'HVAC 2 Compressor VFD is Faulty'
    },
    {
      img: RMPU2_C_V_U,
      description: 'HVAC 2 Compressor VFD Status Unknown/Invalid'
    },

    {
      img: RMPU2_B_V_O,
      description: 'HVAC 2 Blower CONV. is ON'
    },
    {
      img: RMPU2_B_V_NR,
      description: 'HVAC 2 Blower CONV. is Not ready for operation'
    },
    {
      img: RMPU2_B_V_R,
      description: 'HVAC 2 Blower CONV. is ready for operation'
    },
    {
      img: RMPU2_B_V_F,
      description: 'HVAC 2 Blower CONV. is Faulty'
    },
    {
      img: RMPU2_B_V_U,
      description: 'HVAC 2 Blower CONV. Status Unknown/Invalid'
    }

  ];

  return (
    <IonPage>

      <div className="heading-first">
        <div className="train-number">
          <div className="button">22665</div>
        </div>

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
                  width: "70px",
                  height: "55px",
                  border: "2px solid white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  margin: "4px",
                  boxSizing: "border-box"
                }}
              >

                <img
                  src={info.img}
                  alt="vfd"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
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

    </IonPage>
  );
};

export default VFDIcon;