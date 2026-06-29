import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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

/* Optional CSS utils */
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

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/trains">
            <Trains />
          </Route>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route exact path="/:train/home">
            <First />
          </Route>

          <Route path="/:train/second/:id">
            <Second />
          </Route>

          <Route path="/:train/third/:id/:option">
            <Third />
          </Route>

          <Route path="/:train/params/:id/:option">
            <PARAMS />
          </Route>

          <Route path="/:train/symbols/:id/:option">
            <SYMBOLS />
          </Route>

          {/* Legend Pages */}

          <Route path="/:train/legend">
            <EquipmentList />
          </Route>

          <Route path="/:train/legend-door">
            <Door />
          </Route>

          <Route path="/:train/legend-fire">
            <Fire />
          </Route>

          <Route path="/:train/legend-compressor">
            <Compressor />
          </Route>

          <Route path="/:train/legend-light">
            <Light />
          </Route>

          <Route path="/:train/legend-alarm">
            <Alarm />
          </Route>

          <Route path="/:train/legend-airdamper">
            <AirDamper />
          </Route>

          <Route path="/:train/legend-uvlamp">
            <Lamp />
          </Route>

          <Route path="/:train/legend-airfilter">
            <Filter />
          </Route>

          <Route path="/:train/legend-heater">
            <Heater />
          </Route>

          <Route path="/:train/legend-aux">
            <AuxConverterInfo />
          </Route>

          <Route path="/:train/legend-rmpu">
            <RMPULegendInfo />
          </Route>

          <Route path="/:train/legend-condenser">
            <CondenserLegendInfo />
          </Route>

          <Route path="/:train/legend-smoke">
            <SmokeInfo />
          </Route>

          <Route path="/:train/legend-vfd">
            <VFDInfo />
          </Route>

          <Route path="/:train/legend-blower">
            <BlowerInfo />
          </Route>

        </IonRouterOutlet>

      </IonReactRouter>
    </IonApp>

  );
};

export default App;