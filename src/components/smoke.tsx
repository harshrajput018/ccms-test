import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import RMPU1_S_D from '../Images/RMPU1_S_D.png';
import RMPU1_S_A from '../Images/RMPU1_S_A.png';
import RMPU1_S_U from '../Images/RMPU1_S_U.png';

import RMPU2_S_D from '../Images/RMPU2_S_D.png';
import RMPU2_S_A from '../Images/RMPU2_S_A.png';
import RMPU2_S_U from '../Images/RMPU2_S_U.png';

const SmokeInfo: React.FC = () => {

  const smokeInfo = [

    {
      img: RMPU1_S_D,
      description: 'HVAC1 Smoke detected'
    },

    {
      img: RMPU1_S_A,
      description: 'HVAC1 Smoke Detection Sensor is active'
    },

    {
      img: RMPU1_S_U,
      description: 'HVAC1 Smoke Detector is unknown state'
    },

    {
      img: RMPU2_S_D,
      description: 'HVAC2 Smoke detected'
    },

    {
      img: RMPU2_S_A,
      description: 'HVAC2 Smoke Detection Sensor is active'
    },

    {
      img: RMPU2_S_U,
      description: 'HVAC2 Smoke Detector is unknown state'
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
            HVAC SMOKE LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {smokeInfo.map((info, index) => (

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
                  alt="smoke icon"
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

export default SmokeInfo;