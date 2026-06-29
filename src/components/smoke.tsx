import React from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonPage, IonRouterLink, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

import RMPU1_S_D from '../Images/RMPU1_S_D.png';
import RMPU1_S_A from '../Images/RMPU1_S_A.png';
import RMPU1_S_U from '../Images/RMPU1_S_U.png';

import RMPU2_S_D from '../Images/RMPU2_S_D.png';
import RMPU2_S_A from '../Images/RMPU2_S_A.png';
import RMPU2_S_U from '../Images/RMPU2_S_U.png';

import BackButton from './backButton';

const SmokeInfo: React.FC = () => {

  const { train } = useParams<{ train: string }>();

  const smokeInfo = [

    // HVAC1

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

    // HVAC2

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

        <IonRouterLink
          routerLink={`/${train}/legend`}
          className="train-number"
          style={{
            textDecoration: 'none',
            color: 'yellow',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
                  alt="smoke icon"
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

export default SmokeInfo;