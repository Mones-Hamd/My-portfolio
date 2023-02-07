import React from 'react';

const NavigationDots = ({ active }) => {
  const data = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  return (
    <div className="app__navigation">
      {data.map((item, index) => (
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
