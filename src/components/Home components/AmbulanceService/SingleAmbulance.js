// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import './SingleAmbulance.css';
// const SingleAmbulance = ({ ambulances }) => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//     axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/ambooking`, data)
//       .then(res => {

//         toast('Added Ambulance Successfully')
//         reset();



//       })
//   }

//   return (
//     <div>
//       <div className="card ambulancecard lg:max-w-lg bg-base-100">
//         <figure><img src={ambulances.image} className='lg:max-w-lg' alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title">{ambulances.name}</h2>
//           <p>{ambulances.description.slice(0, 100)}</p>

//           <div className="card-actions justify-end">
//             <p className='text-right'><b>$</b> {ambulances.price}</p>
//           </div>
//           <div className="card-actions justify-center">

//             <label htmlFor="my-modal-3" className="btn bg-[#0071DC] hover:bg-black w-full">Book Ambulance</label>
//             <input type="checkbox" id="my-modal-3" className="modal-toggle" />

//             <div className="modal">
//               <div className="modal-box relative">
//                 <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                 <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
//                   <h1 className='font-bold text-2xl mb-1 text-primary'>Please Make a Booking: </h1>
//                   <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' />


//                   <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' />


//                   <input {...register("coursename", { required: true, maxLength: 1520 })} placeholder="Course Name" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />



//                   <input type="text" {...register("price")} placeholder="Course Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />


//                   <input {...register("image", { required: true, maxLength: 1920 })} placeholder="Course Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />





//                   <input {...register("address", { required: true, })} placeholder="User Address" className='input input-bordered w-full max-w-xs drop-shadow-lg' />




//                   <input type="submit" className='w-80 btn bg-[#0071DC] hover:bg-black shadow-banner' value='Book Ambulance' />
//                 </form>
//               </div>
//             </div>

//             {/* <div className="modal">
//   <div className="modal-box relative">
//     <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
//     <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//   </div>
// </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default SingleAmbulance;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const  SingleAmbulance = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default SingleAmbulance;