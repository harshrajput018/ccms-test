import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

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

const BlowerInfo: React.FC = () => {

  const blowerInfo = [

    // HVAC 1

    {
      img: blower1,
      description: 'HVAC1 Blower is running in EMY Mode'
    },

    {
      img: blower2,
      description: 'HVAC1 Blower ON'
    },

    {
      img: blower3,
      description: 'HVAC1 Blower is ready for Operation'
    },

    {
      img: blower4,
      description: 'HVAC1 Blower is not ready for Operation'
    },

    {
      img: blower5,
      description: 'HVAC1 Blower status Unknown/Invalid'
    },

    // HVAC 2

    {
      img: blower6,
      description: 'HVAC2 Blower is running in EMY Mode'
    },

    {
      img: blower7,
      description: 'HVAC2 Blower ON'
    },

    {
      img: blower8,
      description: 'HVAC2 Blower is ready for Operation'
    },

    {
      img: blower9,
      description: 'HVAC2 Blower is not ready for Operation'
    },

    {
      img: blower10,
      description: 'HVAC2 Blower status Unknown/Invalid'
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

    </IonPage>
  );
};

export default BlowerInfo;