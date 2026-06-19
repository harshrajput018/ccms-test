import React, { useEffect, useState } from 'react';
import {
    IonCard,
    IonCardContent,
    IonPage,
    IonContent
} from '@ionic/react';
import { useParams } from 'react-router-dom';

const Login: React.FC = () => {

    const { train, option } = useParams<{
        train: string,
        option: string
    }>();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        const response = await fetch('/users.csv');
        const csvText = await response.text();

        const lines = csvText.split('\n');

        let valid = false;

        for (let i = 1; i < lines.length; i++) {

            const [user, pass] = lines[i].trim().split(',');

            if (user === username && pass === password) {
                valid = true;
                break;
            }
        }

        if (valid) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = '/trains';
        } else {
            alert('Invalid Username or Password');
        }
    };

    const [currentDateTime, setCurrentDateTime] = useState({
        date: '',
        time: ''
    });

    const formatDateTime = () => {

        const now = new Date();

        setCurrentDateTime({
            date: now.toLocaleDateString('en-GB'),
            time: now.toLocaleTimeString('en-GB', {
                hour12: false
            })
        });
    };

    useEffect(() => {

        formatDateTime();

        const interval = setInterval(() => {
            formatDateTime();
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <IonPage>

            <IonContent fullscreen>

                <div className="full-height" >

                    <IonCard className="custom-card">

                        <div className="heading-first">

                            <div className="train-number">
                                <div style={{ fontWeight: 'bold' }}></div>
                            </div>

                            <div className="train-number">
                                <div style={{ fontWeight: 'bold' }}>
                                    LOGIN/USERID
                                </div>
                            </div>

                        </div>

                        <div className="heading-first">

                            <div className="train-number">
                                {currentDateTime.date}
                            </div>

                            <div className="title">
                                {currentDateTime.time}
                            </div>

                        </div>

                        <IonCardContent
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "calc(100vh - 180px)"
                            }}
                        >

                            <div
                                className="Login_outer"
                                style={{
                                    width: "350px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    border: "1px solid lightgrey",
                                    padding: "15px",
                                    backgroundColor: "transparent"
                                }}
                            >

                                <input
                                    type="text"
                                    className="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    style={{
                                        width: "100%"
                                    }}
                                />

                                <input
                                    type="password"
                                    className="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{
                                        width: "100%",
                                        marginTop: "10px"
                                    }}
                                />

                                <div
                                    className="LoginButton"
                                    onClick={handleLogin}
                                    style={{
                                        marginTop: "15px",
                                        cursor: "pointer",
                                        fontSize:'10px',
                                    }}
                                >
                                    LOG IN
                                </div>

                            </div>

                        </IonCardContent>

                    </IonCard>

                </div>

                {/* Footer */}

                <div
                    style={{
                        position: "fixed",
                        bottom: "15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        color: "#888",
                        fontSize: "14px",
                        fontWeight: "500",
                        zIndex: 1000
                    }}
                >
                    CCMS Version 0.2
                </div>

            </IonContent>

        </IonPage>

    );
};

export default Login;