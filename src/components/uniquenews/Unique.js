import React from 'react'
import { Link } from 'react-router-dom';
import './Unique.css'
const Unique = (props) => {
  const {_id,name,description,addedBy,image,blogImage,addedTime,comment,reviews}=props.tool;

  return (
    <div>
       



<div className="card bb lg:max-w-lg bg-base-100">
  <figure className="px-10 pt-10">
    <img src={blogImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='grid lg:grid-cols-2 sm:grid-cols-2'>
<img src={image} className='instructor-img ml-4'></img>
<h1 className='font-card'>{addedBy}</h1>
</div>
<div>
    <h1 className='font-bold text-primary mt-5'>{name}</h1>
</div>
  <div className='grid lg:grid-cols-1 sm:grid-cols-1'>
<p>{description.slice(0, 150)}</p>

</div>
  <div className='grid lg:grid-cols-2 sm:grid-cols-2'>
<p className='mr-2'><i class="fa-solid fa-comment text-cyan-800"></i> Comments({comment})</p>
<p className='ml-2'><i class="fa-solid fa-star text-amber-400"></i> Ratings({reviews})</p>


</div>
  <div className='grid lg:grid-cols-2 sm:grid-cols-2'>



<Link to={`/news/${_id}`}><button className='font-bold text-primary text-xl'><i class="fa-solid fa-eye"></i> View <i class="fa-solid fa-arrow-right"></i></button></Link>


</div>
   
  </div>
</div>
    </div>
  )
}
export default Unique;