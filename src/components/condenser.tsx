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

    // RMPU1 Condenser Fan 1

    {
      img: RMPU1_C_F_O,
      description: 'RMPU1 Condenser Fan 1 is ON'
    },
    {
      img: RMPU1_C_F_R,
      description: 'RMPU1 Condenser Fan 1 is ready for operation'
    },
    {
      img: RMPU1_C_F_NR,
      description: 'RMPU1 Condenser Fan 1 is not ready for Operation'
    },

    // RMPU1 Condenser Fan 2

    {
      img: RMPU1_C_F2_O,
      description: 'RMPU1 Condenser Fan 2 is ON'
    },
    {
      img: RMPU1_C_F2_R,
      description: 'RMPU1 Condenser Fan 2 is ready for operation'
    },
    {
      img: RMPU1_C_F2_NR,
      description: 'RMPU1 Condenser Fan 2 is not ready for Operation'
    },

    // RMPU2 Condenser Fan 1

    {
      img: RMPU2_C_F_O,
      description: 'RMPU2 Condenser Fan 1 is ON'
    },
    {
      img: RMPU2_C_F_R,
      description: 'RMPU2 Condenser Fan 1 is ready for operation'
    },
    {
      img: RMPU2_C_F_NR,
      description: 'RMPU2 Condenser Fan 1 is not ready for Operation'
    },

    // RMPU2 Condenser Fan 2

    {
      img: RMPU2_C_F2_O,
      description: 'RMPU2 Condenser Fan 2 is ON'
    },
    {
      img: RMPU2_C_F2_R,
      description: 'RMPU2 Condenser Fan 2 is ready for operation'
    },
    {
      img: RMPU2_C_F2_NR,
      description: 'RMPU2 Condenser Fan 2 is not ready for Operation'
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
                    alt="condenser icon"
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

        </div>

      </IonContent>

    </IonPage>
  );
};

export default CondenserLegendInfo;