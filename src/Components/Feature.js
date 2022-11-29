import React from 'react'
import './Feature.css'


const featuredata = [
  {
    name: 'Brand New Ultra Luxury Builder Floor',
    property_type : 'Independent',
    image : 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
    price : 23 ,
    total_bhk : 3,
    rating : 4,
    id: 1,
    buid_in_area : 1200,
   
},
{
    name: '3 BHK Apartment in Sector-76 Gurgaon',
    property_type : 'Rent',
    image : 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price : 32 ,
    total_bhk : 3,
    rating : 4,
    id: 2,
    buid_in_area : 1500,
   
},
{
    name: '2, 3 BHK Apartment in Sector-113 Gurgaon',
    property_type : 'Independent',
    image : 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price : 56 ,
    total_bhk : 4,
    rating : 2,
    id: 3,
    buid_in_area : 1800,
    featured : false
},
]

const Feature = () => {

  return (
    <>
     <h1>Exlucive Projects</h1>
    <div className='Exlucive'>
     {
      featuredata.map((elem, index) => {
      return (
        <>
          <div className='single' key={elem.id} >
            <img src={elem.image}  className="img" />
            <h3 className='name' >Name of Project : {elem.name}</h3>
            <h3  className='total_bhk' >Total BHK : {elem.total_bhk}</h3>
           <h3  className='rating' > Rating :{elem. rating}</h3>
           <h4  className='buid_in_area' > Build in area{elem.buid_in_area}</h4>
           <h4  className='price'>Price : {elem.price}</h4>
          </div>
        </>
      )
      })
     }
       </div>
    </>
  )
}

export default Feature