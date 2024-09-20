import  './App.css'
import myStyle from './btn.module.css'

function App(){
  // js code
  function color(clr){
    document.body.style.backgroundColor = clr;
  }


  return (
    // jsx code
    <>
    <div className={myStyle.divStyle}>
<div className={myStyle.div1Style}>
  <div>
        <h1 className='text-center text-white fw-bolder mt-5'>Background Color Changer</h1>
    
  </div>
     <div style={{width:'800px'}}> 
          <button className={myStyle.redbtn} onClick={() => color('red')}>Red</button>
          <button className={myStyle.greenbtn} onClick={() => color('green')}>Green</button>
          <button className={myStyle.yellowbtn} onClick={() => color('yellow')}>Yellow</button>
          <button className={myStyle.bluebtn} onClick={() => color('blue')}>Blue</button>
          <button className={myStyle.orangebtn} onClick={() => color('Orange')}>Orange</button>
          <button className={myStyle.blackbtn} onClick={() => color('black')}>Black</button>
     </div>
  
  
</div>

    </div>
    </>
  )
}


export default App