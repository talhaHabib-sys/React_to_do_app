import {useState} from 'react'
function App() {
  const [set,up]=useState('')
  const[aset,aup]=useState([])
  function addItem(){
    let arr=[...aset]
    arr.push(set)
    aup(arr)
    document.getElementById('inp').value=''
  }
  function RemoveItem(){
    let arr=[...aset]
    arr.pop()
    aup(arr)
    
  }
  function edt(e)
  {
    document.getElementById('inp').value=e
  }
  function Empty(){
    
    let arr=[...aset]
    arr=[]
    aup(arr)
    
  }
  console.log(aset)
  return (
    <div className="Main">
      <div className='Center' style={{textAlign:"center", borderBottom: "3px solid gray"}}>
      <br>
      </br>
      <h1>To Do List</h1>
      <input type='text' onChange={(e)=>up(e.target.value)} placeholder='AddItem' id='inp'/>
      <button onClick={addItem} >+</button>
      <button onClick={RemoveItem} id='abc'>-</button>
      <button onClick={Empty}>Empty list</button>
</div>


<body/>
      <div style={{top:'10px'}}>
      <ul style={{backgroundColor:'lightgreen'}}> 
        {aset.map((e,i)=>{return <li style={{color:'smokewhite' ,borderBottom:'1px solid gray',borderTop:'1px solid gray'}} id='ab'>{e}<button>Edit</button></li>})}
          </ul>
          </div>
      
</div> 
  );
}

export default App;
