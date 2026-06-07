import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonPage, IonContent, IonRouterLink } from '@ionic/react';
import { useParams } from 'react-router-dom';

const Login: React.FC = () => {
    const { train, option } = useParams<{ train: string, option: string }>();

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

    // Function to format date and time
    const formatDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-GB'); // dd/mm/yy format
        const time = now.toLocaleTimeString('en-GB', { hour12: false }); // hh:mm:ss format (24 hr)
        setCurrentDateTime({ date, time });
    };

    useEffect(() => {
        // Set the initial date and time
        formatDateTime();

        // Optionally, update the time every second
        const interval = setInterval(() => {
            formatDateTime();
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <IonPage>
            <IonContent>
                <div className='full-height'>
                    <IonCard className="custom-card">
                        <div className="heading-first">
                            <div className="train-number">
                                <div style={{ fontWeight: 'bold' }}></div>
                            </div>
                            <div className="train-number">
                                <div style={{ fontWeight: 'bold' }}>LOGIN/USERID</div>
                            </div>
                        </div>
                        <div className="heading-first">
                            <div className="train-number">
                                {currentDateTime.date} {/* Dynamic Date */}
                            </div>
                            <div className="title">
                                {currentDateTime.time} {/* Dynamic Time */}
                            </div>
                        </div>
                        <IonCardContent className='LoginContent'>
                            <div className="Login_outer">
                                <input
                                    type="text"
                                    className="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <input
                                    type="password"
                                    className="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="LoginButton" onClick={handleLogin}>
                                    LOG IN
                                </div>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
