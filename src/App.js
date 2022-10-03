import React,{useState,useEffect} from 'react';
import './App.css';

import logo from './cardi-b-laughing.gif';




const App =() => {
  const [setup,setSetup]=useState("");
  const [punchline,setPunchline]=useState("");
  const [mid,setMid]=useState("");
  const [image,setImage]=useState(true);

 
  const Joke =() => {
    
  
   
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => {
        setImage(true)

       setPunchline("")
       setMid("")
        setSetup(data['setup'])

        setTimeout(() => {
          setMid("(wait for it....)")
      }, 1000);
        
  
        setTimeout(() => {
          setPunchline(data['punchline'])
      }, 2500);
       

      setTimeout(() => {
        setImage(false)
    }, 3500);
      
        
    
      });
} 


  return (
    
   <div className='Title'>
     <p>Hello Aggie! Looking for a laugh?</p>
     <div className='wrapper'>
     <a href="#"> <span onClick={Joke}>Click for a joke </span></a>
    
     </div>
     
     <p >{setup}</p>
     <p>{mid}</p>

    <p>{punchline}</p>
    <img src={logo} hidden={image}/>

     

    
    
   </div>
  
  ) ;

  
}


export default App;
