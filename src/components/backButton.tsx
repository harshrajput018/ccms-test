import React, { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';
import { arrowBack, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface BackButtonProps {
    logout?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ logout = false }) => {

    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {

        if (logout) {
            setShowAlert(true);
        } else {
            history.goBack();
        }

    };

    return (
        <>

            <div
                onClick={handleClick}
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

                    background: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',

                    color: logout ? '#ff4d4d' : 'yellow',
                    fontWeight: 'bold',
                    fontSize: '16px',

                    cursor: 'pointer',
                    userSelect: 'none',

                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
            >

                <IonIcon
                    icon={logout ? logOutOutline : arrowBack}
                    style={{
                        marginRight: '6px',
                        fontSize: '18px'
                    }}
                />

                {logout ? 'LOGOUT' : 'BACK'}

            </div>

            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Logout"
                message="Are you sure you want to logout?"
                buttons={[
                    {
                        text: 'No',
                        role: 'cancel'
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            history.replace('/login');
                        }
                    }
                ]}
            />

        </>
    );
};

export default BackButton;