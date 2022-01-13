import React from 'react';

import {useCount} from '../../context/Counter';

export default function Mirror() {
  const {count} = useCount();

  return (
    <div>
      <span>
        <b>Mirror: {count}</b>
      </span>
    </div>
  );
}
