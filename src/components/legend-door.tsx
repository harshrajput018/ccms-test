import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import Doo_O_D from '../Images/Doo_O_D.png';
import Door_Cl from '../Images/Door_Cl.png';
import Door_A_O from '../Images/Door_A_O.png';
import door3 from '../Images/door-3.png';
import door2 from '../Images/door-2.png';
import Door_Comm_Failure from '../Images/Door_Comm_Failure.png';

const DoorInfo: React.FC = () => {

  const doorInfo = [

    {
      img: Doo_O_D,
      description:
        'Obstacle Detected During door closing operation.'
    },

    {
      img: Door_Cl,
      description:
        'All Doors are closed.'
    },

    {
      img: Door_A_O,
      description:
        'At least one door is in open state.'
    },

    {
      img: door3,
      description:
        'At least one door is isolated.'
    },

    {
      img: door2,
      description:
        'Critical Failure indication from door.'
    },

    {
      img: Door_Comm_Failure,
      description:
        'Door Communication Failure.'
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
            DOORS LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {doorInfo.map((info, index) => (

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
                  alt={info.description}
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

export default DoorInfo;