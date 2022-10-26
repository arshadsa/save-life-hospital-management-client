import React, { useEffect, useState } from 'react'
import  Unique  from '../uniquenews/Unique'


   const News = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/news')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
    <div>
<p className='text-center text-4xl uppercase font-bold  '>Our Popoular <span className='text-[#1b82e2]'> (Blogs) </span> </p>
<div className='grid lg:grid-cols-4 sm:grid-cols-1  pt-10 pb-10'>
{
    tools.map(tool=><Unique
    key={tool._id}
    tool={tool}
    
    ></Unique>)
}
</div>

    </div>
  )
}
export default News;