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
    <div  style={{ width: '500px', height: '500px', position: 'relative' }}>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: '100%', height: '100%' }}
      >

<defs>
    <linearGradient 
      gradientUnits="userSpaceOnUse" 
      x1="207.176" 
      y1="136.053" 
      x2="207.176" 
      y2="395.771" 
      id="gradient-1" 
      spreadMethod="pad" 
      gradientTransform="matrix(0.007237, 0.999928, -0.659876, 0.013158, 325.017191, 49.271718)"
    >
      <stop offset="0" stopColor="rgb(159, 156, 156)" />
      <stop offset="0.526" stopColor="rgb(246, 246, 246)" />
      <stop offset="1" stopColor="rgb(158, 158, 158)" />
    </linearGradient>
  </defs>
  
        {/* Outline Tank */}
        <rect x="73.046" y="142.888" width="82.871" height="251.175" 
        fill=" rgb(3, 3, 3)"/>
        
<rect x="79.88" y={142.888 + (251.175 * (100-level) / 100)} 
              width="54.677" 
              height={251.175 * (level) / 100} 
              rx    ="2" ry="2" 
              fill="#4a90e2" fillOpacity="1" />

        {/* Liquid Fill */}


        
  
  
  
  <path 
    d="M 65.357 136.053 L 236.224 136.053 L 236.224 395.771 L 65.357 395.771 Z M 95.258 388.366 L 111.49 388.366 L 111.49 166.239 L 95.258 166.239 Z" 
    style={{ 
      paintOrder: "fill",
      fillRule: "nonzero",
      fill: "url(#gradient-1)"
    }} 
  />
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre",
      fontSize: "16px"
    }}
    x="167.163"
    y="168.059"
  >
    LSHH
  </text>
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre",
      fontSize: "16px"
    }}
    x="178.717"
    y="190.928"
  >
    LSH
  </text>
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre",
      fontSize: "16px"
    }}
    x="181.371"
    y="366.48"
  >
    LSL
  </text>
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre",
      fontSize: "16px"
    }}
    x="172.47"
    y="388.004"
  >
    LSLL
  </text>
  
  <path 
    style={{
      fill: "rgb(216, 216, 216)",
      stroke: "rgb(0, 0, 0)"
    }}
    d="M 215.112 164.06 L 235.291 164.06"
  />
  
  <path 
    style={{
      fill: "rgb(216, 216, 216)",
      stroke: "rgb(0, 0, 0)",
      strokeWidth: "1",
      transformBox: "fill-box",
      transformOrigin: "50% 50%"
    }}
    d="M 215.112 186.259 L 235.291 186.259"
    transform="matrix(1, 0.000001, -0.000001, 0.999996, -0.000115, 0.000692)"
  />
  
  <path 
    style={{
      fill: "rgb(216, 216, 216)",
      stroke: "rgb(0, 0, 0)",
      strokeWidth: "1",
      transformOrigin: "225.199px 359.12px"
    }}
    d="M 215.112 359.121 L 235.291 359.121"
  />
  
  <path 
    style={{
      fill: "rgb(216, 216, 216)",
      stroke: "rgb(0, 0, 0)",
      strokeWidth: "1",
      transformOrigin: "225.199px 381.316px"
    }}
    d="M 215.112 381.317 L 235.291 381.317"
  />
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre",
      fontSize: "16px",
      strokeWidth: "1"
    }}
    x="142.256"
    y="273.665"
  >
    {level}%
  </text>
  
  <text 
    style={{
      fill: "rgb(51, 51, 51)",
      fontFamily: "Arial, sans-serif",
      whiteSpace: "pre"
    }}
    x="137.419"
    y="299.46"
  >
    <tspan style={{ fontSize: "16px", wordSpacing: "0px" }}>{level/100 * 500} m</tspan>
    <tspan style={{ fontSize: "11px", baselineShift: "super", wordSpacing: "0px" }}>3</tspan>
  </text>
</svg>
    </div>
  );
};

export default Tank1;