import { IonPage } from '@ionic/react';
import './ExploreContainer.css';
import First from './first';


interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {
  return (
    
    <IonPage className='full-height'>
      <First/>
    </IonPage>
  );
};

export default Main;