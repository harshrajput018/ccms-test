import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import AC_R_O from '../Images/AC_R_O.png';
import AC_NR_O from '../Images/AC_NR_O.png';
import AC1_E from '../Images/AC1_E.png';
import AC1_N_E from '../Images/AC1_N_E.png';
import AC1_V_C from '../Images/AC1_V_C.png';
import AC1_S_U from '../Images/AC1_S_U.png';

import AC2_R_O from '../Images/AC2_R_O.png';
import AC2_NR_O from '../Images/AC2_NR_O.png';
import AC2_E from '../Images/AC2_E.png';
import AC2_N_E from '../Images/AC2_N_E.png';
import AC2_V_C from '../Images/AC2_V_C.png';
import AC2_S_U from '../Images/AC2_S_U.png';

const AuxConverterInfo: React.FC = () => {

  const auxInfo = [

    {
      img: AC_R_O,
      description:
        'Auxiliary Converter 1 is ready for operation, communication is healthy and VCB is not closed.'
    },
    {
      img: AC_NR_O,
      description:
        'Auxiliary Converter 1 is not ready for operation.'
    },
    {
      img: AC1_E,
      description:
        'Auxiliary Converter 1 is Enabled and is running healthy with no faults.'
    },
    {
      img: AC1_N_E,
      description:
        'Auxiliary Converter 1 is not Enabled in the BU and three phase supply is available due to changeover.'
    },
    {
      img: AC1_V_C,
      description:
        'If the VCB is closed and three phase supply is not available on the bus due to external fault or no changeover.'
    },
    {
      img: AC1_S_U,
      description:
        'Auxiliary Converter 1 status is Unknown/Invalid.'
    },

    {
      img: AC2_R_O,
      description:
        'Auxiliary Converter 2 is ready for operation, communication is healthy and VCB is not closed.'
    },
    {
      img: AC2_NR_O,
      description:
        'Auxiliary Converter 2 is not ready for operation.'
    },
    {
      img: AC2_E,
      description:
        'Auxiliary Converter 2 is Enabled and is running healthy with no faults.'
    },
    {
      img: AC2_N_E,
      description:
        'Auxiliary Converter 2 is not Enabled in the BU and three phase supply is available due to changeover.'
    },
    {
      img: AC2_V_C,
      description:
        'If the VCB is closed and three phase supply is not available on the bus due to external fault or no changeover.'
    },
    {
      img: AC2_S_U,
      description:
        'Auxiliary Converter 2 status is Unknown/Invalid.'
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
            AUXILIARY CONVERTER LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {auxInfo.map((info, index) => (

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
                  alt={info.description}
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

export default AuxConverterInfo;