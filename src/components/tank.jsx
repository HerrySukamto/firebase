import React, { useState, useEffect } from 'react';
import {database, ref, onValue } from '../firebase';

const Tank1 = () => {
  const [level, setLevel] = useState(0);
  
  useEffect(() => {
    const levelRef = ref(database, 'tank/level');
    
    const unsubscribe = onValue(levelRef, (snapshot) => {
      const newLevel = snapshot.val();
      setLevel(newLevel);
    });
    
    return () => unsubscribe();
  }, []);

  // Hitung tinggi fill berdasarkan level (0-100%)
  const fillHeight = `${100 - level}%`;

  return (
    <div  style={{ width: '200px', height: '300px', position: 'relative' }}>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Outline Tank */}
        <rect x="10" y="10" width="180" height="280" rx="5" ry="5" 
              fill="none" stroke="black" strokeWidth="2" />
        
        {/* Liquid Fill */}
        <rect x="15" y="15" width="170" height="270" rx="2" ry="2" 
              fill="none" stroke="none" />
              
        <rect x="15" y={15 + (270 * (100-level) / 100)} 
              width="170" 
              height={270 * (level) / 100} 
              rx="2" ry="2" 
              fill="#4a90e2" fillOpacity="0.7" />
        
        {/* Level Indicator */}
        <text x="100" y="30" textAnchor="middle" fill="black" fontSize="16">
          {level}%
        </text>
      </svg>
    </div>
  );
};

export default Tank1;