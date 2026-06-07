import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../components/ExploreContainer.css' 
import './Home.css';
import Main from '../components/main';
import { useEffect } from 'react';



const Home: React.FC = () => {

  

  return (
    <IonPage>
      <IonContent>
        <Main />
      </IonContent>
    </IonPage>
  );
};

export default Home;
