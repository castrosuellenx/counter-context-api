import React from 'react';

import CountProvider from './context/Counter';

import Counter from './components/Counter';
import Mirror from './components/Mirror';

function App() {
  return (
    <CountProvider>
      <div>
        <Counter />

        <hr />

        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
