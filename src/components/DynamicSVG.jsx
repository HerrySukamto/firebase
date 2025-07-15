import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebase";
import iconSvg from "../assets/icon.svg"; // Import file SVG

function DynamicSVG() {
  const [svgColor, setSvgColor] = useState("#000000");

  // 1. Ambil data warna dari Firebase Realtime Database
  useEffect(() => {
    const colorRef = ref(database, "svgSettings/color");
    onValue(colorRef, (snapshot) => {
      setSvgColor(snapshot.val() || "#000000"); // Default: hitam
    });
  }, []);

  // 2. Manipulasi SVG dengan nilai realtime
  return (
    <div>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle id="myCircle" cx="50" cy="50" r="40" fill={svgColor} style={{ filter: `drop-shadow(0 0 5px ${svgColor})` }}/>
      </svg>
      <img 
        src={iconSvg} 
        alt="Dynamic SVG" 
        style={{ 
          filter: `drop-shadow(0 0 5px ${svgColor})`, // Contoh manipulasi
          // atau gunakan metode lain (lihat catatan di bawah)
        }} 
      />
      <p>Warna saat ini: {svgColor}</p>
      
    </div>
  );
}

export default DynamicSVG;