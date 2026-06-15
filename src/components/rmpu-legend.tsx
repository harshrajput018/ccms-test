import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import RMPU_R from '../Images/RMPU_R.png';
import RMPU_B_R from '../Images/RMPU_B_R.png';
import RMPU_C_O from '../Images/RMPU_C_O.png';
import RMPU_S_N from '../Images/RMPU_S_N.png';
import RMPU1_D_S from '../Images/RMPU1_D_S.png';
import RMPU2_D_S from '../Images/RMPU2_D_S.png';

import defaultIcon from '../Images/RM_RM.png';

const RMPULegendInfo: React.FC = () => {

  const rmpuLegend = [

    {
      img: RMPU_R,
      description:
        'RMPU Units in all the coaches is ready to operate in Emergency mode.'
    },

    {
      img: RMPU_B_R,
      description:
        'RMPU Blowers are running in emergency mode.'
    },

    {
      img: defaultIcon,
      description:
        'RMPU units are ready for operation in Normal mode. Three phase supply available for all the RMPU units in the BU.'
    },

    {
      img: defaultIcon,
      description:
        'Only 1 Bus has three phase supply available. Half of RMPU Work in normal mode, remaining half in emergency mode.'
    },

    {
      img: defaultIcon,
      description:
        'RMPU units are running in compressor off and Blower on state.'
    },

    {
      img: RMPU_C_O,
      description:
        'RMPU units are running in compressor on state.'
    },

    {
      img: RMPU_S_N,
      description:
        'RMPU Status is not available.'
    },

    {
      img: RMPU1_D_S,
      description:
        '1 --> RMPU1 status in a corresponding coach. Symbol decoding same as Rake level.'
    },

    {
      img: RMPU2_D_S,
      description:
        '2 --> RMPU2 status in a corresponding coach. Symbol decoding same as Rake level.'
    },

    {
      img: defaultIcon,
      description:
        'Heater ON.'
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
            RMPU LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {rmpuLegend.map((item, index) => (

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
                  src={item.img}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block"
                  }}
                />
              </div>

              <div className="name">
                {item.description}
              </div>

            </div>

          ))}

        </div>

      </IonContent>

    </IonPage>
  );
};

export default RMPULegendInfo;