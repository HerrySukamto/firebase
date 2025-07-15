import { useState, useEffect } from 'react';
import { database, ref, onValue } from './firebase';
//import {retank as MySVG} from './assets/tank.svg'

const StudioData = () => {
  const [studioValue, setStudioValue] = useState(null);

  useEffect(() => {
    // Referensi ke path data di Realtime Database
    const studioRef = ref(database, 'Studio/Nilai');
    
    // Mendengarkan perubahan data secara real-time
    const unsubscribe = onValue(studioRef, (snapshot) => {
      const data = snapshot.val();
      setStudioValue(data);
    });

    // Membersihkan listener ketika komponen unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      
      <h2>Data Studio </h2>
      {studioValue !== null ? (
        <div>
          <p>Nilai Studio: {studioValue}</p>
          {studioValue === 1 && <p>Status: Aktif</p>}
        </div>
      ) : (
        <p>Memuat data...</p>
        
      )}
      
    </div>
  );


 
  
};

export default StudioData;