import React, { useEffect, useState } from 'react'

const Pixabay = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState('')
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=38193730-47a2305c1f5b8a2fca8023bca&q=${search}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>setData(data.hits))
  }) 
  return (
    <div>
      <center><input type='text' onChange={(e)=>setSearch(e.target.value)}></input><button>Search</button></center>
      <section style={{display:'flex',justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {data && data.map((item)=>{
          return(
            <img src={item.largeImageURL} alt='' height={item.webformatHeight} width={item.webformatWidth}></img>
          )
        })}
      </section>
    </div>
  )
}

export default Pixabay
 