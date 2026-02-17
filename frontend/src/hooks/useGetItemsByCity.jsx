// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { serverUrl } from '../config.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { setItemsInMyCity, setShopsInMyCity, setUserData } from '../redux/userSlice'

// function useGetItemsByCity() {
//     const dispatch=useDispatch()
//     const {currentCity}=useSelector(state=>state.user)
//   useEffect(()=>{
//   const fetchItems=async () => {
//     try {
//            const result=await axios.get(`${serverUrl}/api/item/get-by-city/${currentCity}`,{withCredentials:true})
//             dispatch(setItemsInMyCity(result.data))
//            console.log(result.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchItems()
 
//   },[currentCity])
// }

// export default useGetItemsByCity

import axios from 'axios';
import React, { useEffect } from 'react';
import { serverUrl } from '../config.js';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsInMyCity } from '../redux/userSlice';

function useGetItemsByCity() {
    const dispatch = useDispatch();
    const { currentCity } = useSelector(state => state.user);

    useEffect(() => {
        // ✅ Added guard to prevent running if city is null
        if (!currentCity) {
            return;
        }

        const fetchItems = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/item/get-by-city/${currentCity}`, { withCredentials: true });
                dispatch(setItemsInMyCity(result.data));
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchItems();
    }, [currentCity, dispatch]); // Added dispatch to dependency array
}

export default useGetItemsByCity;