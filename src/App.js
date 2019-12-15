import React from 'react';
import { Provider } from 'mobx-react';

import Layout from './components/Layout';
import mainStore from './stores/mainStore';
import HabitsStore from './stores/HabitsStore';

const stores = {
  habitsStore: new HabitsStore(),
};

const App = () => (
  <Provider {...stores}>
    <Layout />
  </Provider>
);

export default App;
