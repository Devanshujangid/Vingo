// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { serverUrl } from '../config.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { setShopsInMyCity, setUserData } from '../redux/userSlice'

// function useGetShopByCity() {
//     const dispatch=useDispatch()
//     const {currentCity}=useSelector(state=>state.user)
//   useEffect(()=>{
//   const fetchShops=async () => {
//     try {
//            const result=await axios.get(`${serverUrl}/api/shop/get-by-city/${currentCity}`,{withCredentials:true})
//             dispatch(setShopsInMyCity(result.data))
//            console.log(result.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchShops()
 
//   },[currentCity])
// }

// export default useGetShopByCity

import axios from 'axios';
import React, { useEffect } from 'react';
import { serverUrl } from '../config.js';
import { useDispatch, useSelector } from 'react-redux';
import { setShopsInMyCity } from '../redux/userSlice';

function useGetShopByCity() {
    const dispatch = useDispatch();
    const { currentCity } = useSelector(state => state.user);

    useEffect(() => {
        // ✅ Added guard to prevent running if city is null
        if (!currentCity) {
            return;
        }

        const fetchShops = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/shop/get-by-city/${currentCity}`, { withCredentials: true });
                dispatch(setShopsInMyCity(result.data));
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShops();
    }, [currentCity, dispatch]); // Added dispatch to dependency array
}

export default useGetShopByCity;