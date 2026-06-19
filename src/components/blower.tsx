import React from 'react';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

import blower1 from '../Images/RMPU1_BL_EMY.png';
import blower2 from '../Images/RMPU1_BL_O.png';
import blower3 from '../Images/RMPU1_BL_R.png';
import blower4 from '../Images/RMPU1_BL_NR.png';
import blower5 from '../Images/RMPU1_BL_U.png';

import blower6 from '../Images/RMPU2_BL_EMY.png';
import blower7 from '../Images/RMPU2_BL_O.png';
import blower8 from '../Images/RMPU2_BL_R.png';
import blower9 from '../Images/RMPU2_BL_NR.png';
import blower10 from '../Images/RMPU2_BL_U.png';
import BackButton from './backButton';

const BlowerInfo: React.FC = () => {

  const blowerInfo = [

    // RMPU 1

    {
      img: blower1,
      description: 'RMPU 1 Blower is running in EMY Mode'
    },

    {
      img: blower2,
      description: 'RMPU 1 Blower ON'
    },

    {
      img: blower3,
      description: 'RMPU 1 Blower is ready for Operation'
    },

    {
      img: blower4,
      description: 'RMPU 1 Blower is not ready for Operation'
    },

    {
      img: blower5,
      description: 'RMPU 1 Blower status Unknown/Invalid'
    },

    // RMPU 2

    {
      img: blower6,
      description: 'RMPU 2 Blower is running in EMY Mode'
    },

    {
      img: blower7,
      description: 'RMPU 2 Blower ON'
    },

    {
      img: blower8,
      description: 'RMPU 2 Blower is ready for Operation'
    },

    {
      img: blower9,
      description: 'RMPU 2 Blower is not ready for Operation'
    },

    {
      img: blower10,
      description: 'RMPU 2 Blower status Unknown/Invalid'
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
            BLOWER LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {blowerInfo.map((info, index) => (

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
                  alt="blower icon"
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

export default BlowerInfo;