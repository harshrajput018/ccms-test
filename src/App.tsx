import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import PARAMS from './components/rmpu-params';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SYMBOLS from './components/rmpu-symbols';
import EquipmentList from './components/legend2';
import AuxConverterInfo from './components/_aux';
import RMPULegendInfo from './components/rmpu-legend';
import CondenserLegendInfo from './components/condenser';
import SmokeInfo from './components/smoke';
import VFDInfo from './components/vdf';
import BlowerInfo from './components/blower';
import { useEffect } from 'react';
import { StatusBar, Style } from '@capacitor/status-bar';
import Login from './components/login';
import Trains from './components/trainslist';
import Door from './components/legend-door';
import Fire from './components/legend-fire';
import Compressor from './components/legend-compressor';
import Light from './components/legend-light';
import Alarm from './components/legend-alarm';
import AirDamper from './components/legend-airdamper';
import Heater from './components/legend-heater';
import Lamp from './components/legend-uvlamp';
import Filter from './components/legend-airfilter';


setupIonicReact();


const App: React.FC = () => {


  return (

    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/legend-door" >
            <Door />
          </Route>
          <Route path="/legend-fire" >
            <Fire />
          </Route>
          <Route path="/legend-compressor" >
            <Compressor />
          </Route>
          <Route path="/legend-light" >
            <Light />
          </Route>
          <Route path="/legend-alarm" >
            <Alarm />
          </Route>
          <Route path="/legend-airdamper" >
            <AirDamper />
          </Route>
          <Route path="/legend-uvlamp" >
            <Lamp />
          </Route>
          <Route path="/legend-airfilter" >
            <Filter />
          </Route>
          <Route path="/legend-heater" >
            <Heater />
          </Route>
          <Route path="/trains" >
            <Trains />
          </Route>
          <Route exact path="/:train/home">
            <First />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/:train/second/:id" >
            <Second />
          </Route>
          <Route path="/:train/third/:id/:option" >
            <Third />
          </Route>
          <Route path="/:train/params/:id/:option" >
            <PARAMS />
          </Route>
          <Route path="/:train/symbols/:id/:option" >
            <SYMBOLS />
          </Route>
          <Route path="/legend" >
            <EquipmentList />
          </Route>
          <Route path="/legend-aux" >
            <AuxConverterInfo />
          </Route>
          <Route path="/legend-rmpu" >
            <RMPULegendInfo />
          </Route>
          <Route path="/legend-condenser" >
            <CondenserLegendInfo />
          </Route>
          <Route path="/legend-smoke" >
            <SmokeInfo />
          </Route>
          <Route path="/legend-vfd" >
            <VFDInfo />
          </Route>
          <Route path="/legend-blower" >
            <BlowerInfo />
          </Route>
          <Route path="/legend-rmpu" >
            <RMPULegendInfo />
          </Route>

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>

  );
}

export default App;
