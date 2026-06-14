import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import RMPU1_C_F_O from '../Images/RMPU1_C_F_O.png';
import RMPU1_C_F_R from '../Images/RMPU1_C_F_R.png';
import RMPU1_C_F_NR from '../Images/RMPU1_C_F_NR.png';

import RMPU1_C_F2_O from '../Images/RMPU1_C_F2_O.png';
import RMPU1_C_F2_R from '../Images/RMPU1_C_F2_R.png';
import RMPU1_C_F2_NR from '../Images/RMPU1_C_F2_NR.png';

import RMPU2_C_F_O from '../Images/RMPU2_C_F1_O.png';
import RMPU2_C_F_R from '../Images/RMPU2_C_F1_R.png';
import RMPU2_C_F_NR from '../Images/RMPU2_C_F1_NR.png';

import RMPU2_C_F2_O from '../Images/RMPU2_C_F_O.png';
import RMPU2_C_F2_R from '../Images/RMPU2_C_F_R.png';
import RMPU2_C_F2_NR from '../Images/RMPU2_C_F_NR.png';

const CondenserLegendInfo: React.FC = () => {

  const condenserStates = [

    {
      img: RMPU1_C_F_O,
      description: 'HVAC1 Condenser Fan 1 is ON.'
    },
    {
      img: RMPU1_C_F_R,
      description: 'HVAC1 Condenser Fan 1 is ready for operation.'
    },
    {
      img: RMPU1_C_F_NR,
      description: 'HVAC1 Condenser Fan 1 is Not ready for operation.'
    },

    {
      img: RMPU1_C_F2_O,
      description: 'HVAC1 Condenser Fan 2 is ON.'
    },
    {
      img: RMPU1_C_F2_R,
      description: 'HVAC1 Condenser Fan 2 is ready for operation.'
    },
    {
      img: RMPU1_C_F2_NR,
      description: 'HVAC1 Condenser Fan 2 is Not ready for operation.'
    },

    {
      img: RMPU2_C_F_O,
      description: 'HVAC2 Condenser Fan 1 is ON.'
    },
    {
      img: RMPU2_C_F_R,
      description: 'HVAC2 Condenser Fan 1 is ready for operation.'
    },
    {
      img: RMPU2_C_F_NR,
      description: 'HVAC2 Condenser Fan 1 is Not ready for operation.'
    },

    {
      img: RMPU2_C_F2_O,
      description: 'HVAC2 Condenser Fan 2 is ON.'
    },
    {
      img: RMPU2_C_F2_R,
      description: 'HVAC2 Condenser Fan 2 is ready for operation.'
    },
    {
      img: RMPU2_C_F2_NR,
      description: 'HVAC2 Condenser Fan 2 is Not ready for operation.'
    }

  ];

  return (
    <IonPage>

      <IonContent className="full-height">

        <div className="full-height">

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
                CONDENSER LEGEND INFORMATION
              </div>
            </div>

            <div className="title">
              <div className="button"></div>
            </div>
          </div>

          <div className="equipment-list">

            {condenserStates.map((item, index) => (

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
                    src={item.img}
                    alt="condenser icon"
                    style={{
                      width: "42px",
                      height: "42px",
                      objectFit: "contain",
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

        </div>

      </IonContent>

    </IonPage>
  );
};

export default CondenserLegendInfo;