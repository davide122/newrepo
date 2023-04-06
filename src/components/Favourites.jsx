import { useSelector } from 'react-redux'

const Contenuto =()=>{
    const favorite = useSelector((state)=>{
  
        return state.favorites.content
      
      })
      console.log(favorite)
 return(
   favorite.map((item)=>{
<h1>{item._id}</h1>
   }
 ))
    
}

export default Contenuto;



