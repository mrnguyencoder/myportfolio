// import React, { useState, useEffect } from 'react';

// function Top() {
//     const [visitsCount, setVisitsCount] = useState(0);
//     const [localTime, setLocalTime] = useState(new Date());
  
//     useEffect(() => {
//       const storedVisitsCount = localStorage.getItem('visitsCount');
//       if (storedVisitsCount) {
//         setVisitsCount(parseInt(storedVisitsCount));
//       }
//       const intervalId = setInterval(() => {
//         setLocalTime(new Date());
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }, []);
  
//     useEffect(() => {
//       const handleVisit = () => {
//         setVisitsCount(visitsCount + 1);
//       };
//       window.addEventListener('load', handleVisit);
//       return () => window.removeEventListener('load', handleVisit);
//     }, [visitsCount]);
  
//     useEffect(() => {
//       localStorage.setItem('visitsCount', visitsCount);
//     }, [visitsCount]);
  
//   return (
//     <section className='flex justify-between p-3 bg-slate-700 text-yellow-400'>
//       <div>{localTime.toLocaleString()}</div>
//       <div>Visited: {visitsCount}</div>
//     </section>
//   )
// }

// export default Top