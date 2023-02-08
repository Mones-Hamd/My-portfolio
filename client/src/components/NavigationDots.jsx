import React from 'react';
import { navData } from '../constants/data';
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navData.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
