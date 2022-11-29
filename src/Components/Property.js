
import React from 'react'
import { useEffect, useState } from 'react';
import "./Property.css"

const DataHome = [
    {
        name: 'Brand New Ultra Luxury Builder Floor',
        property_type : 'Independent',
        image : 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '23' ,
        total_bhk : '5',
        rating : '4',
        id: 1,
        buid_in_area : 1200,
        featured : true
    },
    {
        name: '3 BHK Apartment in Sector-76 Gurgaon',
        property_type : 'Rent',
        image : 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '32' ,
        total_bhk : '5',
        rating : '4',
        id: 2,
        buid_in_area : 1500,
        featured : true
    },
    {
        name: '2, 3 BHK Apartment in Sector-113 Gurgaon',
        property_type : 'Independent',
        image : 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '56' ,
        total_bhk : '4',
        rating : '2',
        id: 3,
        buid_in_area : 1800,
        featured : false
    },
    {
        name: 'Godrej Nature Plus',
        property_type : 'Buy',
        image : 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '23' ,
        total_bhk : '5',
        rating : '3',
        id: 4,
        buid_in_area : 1400,
        featured : false
    },
    {
        name: 'Godrej Horizon',
        property_type : 'Rent',
        image : 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '12' ,
        total_bhk : '4',
        rating : '5',
        id: 5,
        buid_in_area : 1130,
        featured : false
    },
    {
        name: 'Brand New Ultra',
        property_type : 'Independent',
        image : 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '10' ,
        total_bhk : '4',
        rating : '4',
        id: 6,
        buid_in_area : 1200,
        featured : true
    },
    {
        name: ' Luxury Builder Floor',
        property_type : 'Buy',
        image : 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '23' ,
        total_bhk : '4',
        rating : '4',
        id: 7,
        buid_in_area : 1200,
        featured : false
    },
    {
        name: ' Builder Unocorn',
        property_type : 'Independent',
        image : 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '54' ,
        total_bhk : '3',
        rating : '3',
        id: 8,
        buid_in_area : 1500,
        featured : false
    },
    {
        name: ' Luxury Builder Floor Apartment',
        property_type : 'Rent',
        image : 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '29' ,
        total_bhk : '3',
        rating : '5',
        id: 9,
        buid_in_area : 1800,
        featured : true
    },
    {
        name: ' Ultra Builder Floor',
        property_type : 'Independent',
        image : 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price : '43' ,
        total_bhk : '3',
        rating : '3',
        id: 10,
        buid_in_area : 1600,
        featured : false
    },
];

const Property = () => {

    const [state, setState] = useState(DataHome);

    const filterCategory = (data1)=>{
        console.log(data1);
        let filterdata = DataHome;
     filterdata = filterdata.filter(function(elem){
            return (
                elem.property_type === data1
            )
         });
         console.log( filterdata);
         setState(filterdata)
        }
      const checkcategory = (event) =>{
        const data1 = event.target.value;
         return filterCategory(data1) 
    }

    const checkrating = (event) =>{
        const data2 = event.target.value;
    return filterrating(data2) 
    }

    const filterrating = (data2) =>{
        console.log(data2)
         let ratingstar = DataHome;
         ratingstar =  ratingstar.filter(function(elem){
                return (elem.rating === data2)
            })
                console.log(ratingstar)
                setState(ratingstar)
         }

         const checkbhk = (event) => {
            let bhk = event.target.value;
            console.log(bhk)
            filterbhk(bhk)
         }

         const filterbhk = (bhk) =>{
            let databhk = DataHome;
            databhk = databhk.filter(function(elem){
                return ( elem. total_bhk === bhk)
            })
            console.log(databhk)
            setState(databhk)
         } 
        
         
         const filterdatalh = () => {
            setState(DataHome)
            DataHome = DataHome.sort(function(a, b){
                
                  return  a.price - b.price;
                
            })
         }
        


         const filterdatahl = () => {
            setState(DataHome)
            DataHome = DataHome.sort(function(a, b){
                  return  b.price - a.price;
            })
        }
        const filterdataaz = () => {
            setState(DataHome)
            DataHome = DataHome.sort(function(a, b) { return (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1)) })
        }
        const filterdataza = () => {
            setState(DataHome)
            DataHome = DataHome.sort(function(a, b) { return (a.name < b.name ? 1 : (a.name === b.name ? 0 : -1)) })
        }
    
   

  return (
   <>
    <div className ='main_div'>
        <div className='div1' >
        <div>
        <h5 className='h5' >Category</h5>
         <select name = 'category' className='category' onClick={checkcategory} >
            <option id="" value='Independent' >Independent</option>
            <option id="" value='Rent' >Rent</option>
            <option id="" value='Buy' >Buy</option>
         </select>
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className='price' >
         <h5 className='h5' >Rating</h5>
         <select name = 'category' className='category' onClick={checkrating} >
            <option id="" value='1' >1 ⭐</option>
            <option id="" value='2' >2 ⭐⭐</option>
            <option id="" value='3' >3 ⭐⭐⭐</option>
            <option id="" value='4' >4 ⭐⭐⭐⭐</option>
            <option id="" value='5' >5 ⭐⭐⭐⭐⭐</option>
         </select>
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className='BHK' >
         <h5 className='h5' >Total BHK </h5>
         <select name = 'category' className='category' onClick={checkbhk} >
            <option id="" value={3} >3 BHK</option>
            <option id="" value={4} >4 BHK</option>
            <option id="" value={5} >5 BHK</option>
         </select>
         </div>

         <div className='filterbtn' >
      <button  onClick={filterdatalh} >Lower to High</button>
      <button  onClick={filterdatahl} > High to lower</button>
      <button  onClick={filterdataaz} >A to Z</button>
      <button  onClick={filterdataza} >Z to A</button>
    </div>
        </div>
        <div className='div2' >
        {
            state.map((elem, index) => {
                    return (
                        <>
                            <div key={elem.id} className='' >
                            <img src={elem.image}  className="img" />
                        <h4 className='name' >Name of Project : {elem.name}</h4>
                       <h4  className='total_bhk' >Total BHK : {elem.total_bhk}</h4>
                       <h4  className='rating' > Rating :{elem. rating}</h4>
                       <h5>Property type :{elem.property_type}</h5>
                        <h4  className='buid_in_area' > Build in area{elem.buid_in_area}</h4>
                        <h4  className='price'>Price : Rs{elem.price} - Lakh</h4>
                            </div>
                        </>
                    )
                })
        
              }  
              
        
        </div>
    </div>
   </>
  )
}

export default Property
