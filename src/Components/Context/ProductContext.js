import { useContext} from "react";
import { createContext } from "react";

const AppContext = createContext();


const AppProvider = ({children}) =>{

    const DataHome = [
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
        {
            name: 'Godrej Nature Plus',
            property_type : 'Buy',
            image : 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price : 23 ,
            total_bhk : 2,
            rating : 3,
            id: 4,
            buid_in_area : 1400,
            featured : false
        },
        {
            name: 'Godrej Horizon',
            property_type : 'Rent',
            image : 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600',
            price : 12 ,
            total_bhk : 2,
            rating : 5,
            id: 5,
            buid_in_area : 1130,
            featured : false
        },
        {
            name: 'Brand New Ultra',
            property_type : 'Independent',
            image : 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600',
            price : 10 ,
            total_bhk : 1,
            rating : 4,
            id: 6,
            buid_in_area : 1200,
           
        },
        {
            name: ' Luxury Builder Floor',
            property_type : 'Buy',
            image : 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price : 23 ,
            total_bhk : 4,
            rating : 4,
            id: 7,
            buid_in_area : 1200,
            featured : false
        },
        {
            name: ' Builder Unocorn',
            property_type : 'Independent',
            image : 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price : 54 ,
            total_bhk : 3,
            rating : 3,
            id: 8,
            buid_in_area : 1500,
            featured : false
        },
        {
            name: ' Luxury Builder Floor Apartment',
            property_type : 'Rent',
            image : 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price : 29 ,
            total_bhk : 2,
            rating : 5,
            id: 9,
            buid_in_area : 1800,
           
        },
        {
            name: ' Ultra Builder Floor',
            property_type : 'Independent',
            image : 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price : 43 ,
            total_bhk : 2,
            rating : 3,
            id: 10,
            buid_in_area : 1600,
            featured : false
        },
    ]; 
    
const {name}  = DataHome;
console.log(name)

    return (
        <>
        <AppContext value={{DataHome}} >
            {children}  
        </AppContext>
        </>

    )
}

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};