import { useEffect, useState } from 'react'

import './App.css'

// const Card = ({title})=>{
//   const [hasLiked,setHasLiked] = useState(false);
//   const [count,setCount] = useState(0);


//   useEffect(()=>{console.log(`${title} has been liked:${hasLiked}`)
// },[hasLiked]);
// useEffect(()=>{console.log("CARD RENDERED")},[]);


//   return(<div className="card" onClick={()=>setCount((prevState)=>prevState+1)}>
    
//     <h2>{title} <br/>{count?count:null}</h2>
//     <button onClick={()=>setHasLiked(!hasLiked)}
//     >
//       {hasLiked?'❤️': '🤍'}
    
//     </button>
    
    
//     </div>);
// }
const App =()=>{
  return(
  
 
 <main>
<div className='pattern'>
  <div className='wrapper'>
<header >
<img src="./hero.png" alt ="Hero Banner"/>


    <h1>Find <span className='text-gradient'>Movies</span> you'll enjoy without the hassle</h1>
    </header>
    <p>Search</p>
    
  </div>

</div>

 </main>
  )
}

export default App
