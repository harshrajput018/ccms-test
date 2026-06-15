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

        const date = now.toLocaleDateString('en-GB');
        const time = now.toLocaleTimeString('en-GB', {
            hour12: false
        });

        setCurrentDateTime({
            date,
            time
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

            <IonContent>

                <div className="full-height">

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

                        <IonCardContent className="LoginContent">

                            <div className="Login_outer">

                                <input
                                    type="text"
                                    className="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                                <input
                                    type="password"
                                    className="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <div
                                    className="LoginButton"
                                    onClick={handleLogin}
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
                    <div></div>
                    <div>CCMS Version 0.1</div>
                </div>

            </IonContent>

        </IonPage>

    );
};

export default Login;