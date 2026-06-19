import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const BackButton: React.FC = () => {

    const history = useHistory();

    return (

        <div
            onClick={() => history.goBack()}
            style={{
                position: 'fixed',
                bottom: '15px',
                left: '15px',
                zIndex: 9999,

                minWidth: '110px',
                height: '45px',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '8px',

                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',

                color: 'yellow',
                fontWeight: 'bold',
                fontSize: '16px',

                cursor: 'pointer',
                userSelect: 'none',

                boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
            }}
        >

            <IonIcon
                icon={arrowBack}
                style={{
                    marginRight: '6px',
                    fontSize: '18px',
                    opacity: 0.9
                }}
            />

            BACK

        </div>

    );
};

export default BackButton;