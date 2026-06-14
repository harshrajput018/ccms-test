import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import defaultIcon from '../Images/RM_RM.png';

const RMPULegendInfo: React.FC = () => {

  const hvacLegend = [

    {
      img: defaultIcon,
      description:
        'HVAC Units in all the coaches is ready to operate in Emergency mode.'
    },

    {
      img: defaultIcon,
      description:
        'HVAC Blowers are running in emergency mode.'
    },

    {
      img: defaultIcon,
      description:
        'HVAC units are ready for operation in Normal mode. Three phase supply available for all the HVAC units in the BU.'
    },

    {
      img: defaultIcon,
      description:
        'Only 1 Bus has three phase supply available. Half of HVAC Work in normal mode, remaining half in emergency mode.'
    },

    {
      img: defaultIcon,
      description:
        'HVAC units are running in compressor off and Blower on state.'
    },

    {
      img: defaultIcon,
      description:
        'HVAC units are running in compressor on state.'
    },

    {
      img: defaultIcon,
      description:
        'HVAC Status is not available.'
    },

    {
      img: defaultIcon,
      description:
        '1 --> HVAC1 status in a corresponding coach. Symbol decoding same as Rake level.'
    },

    {
      img: defaultIcon,
      description:
        '2 --> HVAC2 status in a corresponding coach. Symbol decoding same as Rake level.'
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
            HVAC LEGEND INFORMATION
          </div>
        </div>

        <div className="title">
          <div className="button"></div>
        </div>
      </div>

      <IonContent>

        <div className="full-height">

          {hvacLegend.map((item, index) => (

            <div
              key={index}
              className="equipment-item"
            >

              <div className="icon">
                <img
                  src={item.img}
                  alt="icon"
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