import React, { useEffect, useState } from 'react'
import Style from '../../styles/Home.module.css'
import { Card,Stack,Heading,Text,Image,Divider, CardBody } from '@chakra-ui/react'
import { ApiData } from './Api/api'
import Navbar from './nabbar'
const Catogary=[
  ... new Set(ApiData.map((item)=>{
  return item.name
   })),'All'
 ]
 

const Resturent = () => {
const [apiData,setData]=useState(ApiData)
const [catogary,setCatgary]=useState(Catogary)
// filterItem
const filterItem=(name)=>{
 if(name=='All'){
   setData(ApiData)
  return;
 }
  const newData=ApiData.filter((item)=>{ 
  return item.name==name
  })
  setData(newData)
  }
  // Catogary fuction
  // useEffect(()=>{
    
  //  },[])
        
       
       
    
      
  
 
  

  return (
    <>
<Navbar filterItem={filterItem} catogary={catogary}/>
 <div className={Style.main}> 
 <div className={Style.grid}>
  {
    apiData.map((currentItem)=>{
      const {name,title,image}=currentItem
    return(
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      width='200px'
      height={'200px'}
        alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>

      <Text>
      {title}
      </Text>
  
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
    )
    })
  } 

 </div>

 </div>
      
          
        
      
   
      </>
  )
}

export default Resturent
