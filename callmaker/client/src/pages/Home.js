import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(){
  const [signals, setSignals] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/signals')
      .then(r=>setSignals(r.data))
      .catch(()=>setSignals([]));
  },[]);
  return (
    <div style={{padding:20}}>
      <h1>CallMaker - Crypto Signals</h1>
      <ul>
        {signals.map(s=> <li key={s.id}>{s.pair} - {s.type} @ {s.price}</li>)}
      </ul>
    </div>
  );
}
