import React from 'react'
import Style from '../../styles/Home.module.css'
import { Button } from '@chakra-ui/react' 
const Navbar = ({filterItem,catogary}) => {
  return (
    <>
    <div className={Style.navbar}>
            {
              catogary.map((item)=>{
                return(

                  <Button onClick={()=>filterItem(item)} className={Style.btn}  colorScheme={'blackAlpha'}>{item}</Button>
                )
              })
            }

          
  
    
    </div>
               
    
    
    
    </>
  )
}

export default Navbar
