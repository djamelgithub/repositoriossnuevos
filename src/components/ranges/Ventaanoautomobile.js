import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

 
  const Ventaanoautomobile = ({VentaAnoAutomobileeee}) => {
    const [anoventa, setAnoVenta] = useState([1990, 2023]);

    return (
      <div className='card'>
        <label>
        Sélectionnez l'année:
          <Slider
            min={1990}
            max={2023}
            step={1}
            range
            value={anoventa}
            onChange={(newRange) => {
              setAnoVenta(newRange);
              VentaAnoAutomobileeee(newRange); // Llama a la función proporcionada por el prop
            }}
            trackStyle={{ backgroundColor: '#EB2B00', height: 10 }}
            handleStyle={{
              borderColor: '#007bff',
              height: 20,
              width: 20,
              marginLeft: -10,
              marginTop: -5,
              backgroundColor: '#007bff',
            }}
            railStyle={{ backgroundColor: '#ccc', height: 10 }}
          />
  
          <div style={{ marginTop: 10 }}>
          Année: De {anoventa[0]} à {anoventa[1]}
          </div>
        </label>
      </div>
    );
  };
  
  export default Ventaanoautomobile
  