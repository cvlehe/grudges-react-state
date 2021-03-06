import React, { useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';
import Grudge from './Grudge';

const Grudges = () => {
  const { grudges, onForgive } = useContext(GrudgeContext);
  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map(grudge => (
        <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive} />
      ))}
    </section>
  );
};

export default Grudges;
