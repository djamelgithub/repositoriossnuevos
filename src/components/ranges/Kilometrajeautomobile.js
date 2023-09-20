import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
const Kilometrajeautomobile = ({kilometrajeeautomobiles}) => {
    const [kilometrage, setkilometrage] = useState([0, 500000]);

    return (
      <div className='card'>
        <label>
        Sélectionnez le range de kilometrage:
          <Slider
            min={0}
            max={500000}
            step={50}
            range
            value={kilometrage}
            onChange={(newRange) => {
              setkilometrage(newRange);
              kilometrajeeautomobiles(newRange); // Llama a la función proporcionada por el prop
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
          kilometrage: De {kilometrage[0]} à {kilometrage[1]}
          </div>
        </label>
      </div>
    );
  };
  

export default Kilometrajeautomobile
