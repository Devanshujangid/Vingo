// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { serverUrl } from '../config.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { setMyOrders, setUserData } from '../redux/userSlice'
// import { setMyShopData } from '../redux/ownerSlice'

// function useGetMyOrders() {
//     const dispatch=useDispatch()
//     const {userData}=useSelector(state=>state.user)
//   useEffect(()=>{
//   const fetchOrders=async () => {
//     try {
//            const result=await axios.get(`${serverUrl}/api/order/my-orders`,{withCredentials:true})
//             dispatch(setMyOrders(result.data))
   


//     } catch (error) {
//         console.log(error)
//     }
// }
//   fetchOrders()

 
  
//   },[userData])
// }

// export default useGetMyOrders

import axios from 'axios';
import React, { useEffect } from 'react';
import { serverUrl } from '../config.js';
import { useDispatch, useSelector } from 'react-redux';
import { setMyOrders } from '../redux/userSlice';

function useGetMyOrders() {
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user);

    useEffect(() => {
        // ✅ Added guard to prevent running if user is not loaded
        if (!userData) {
            return;
        }

        const fetchOrders = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/order/my-orders`, { withCredentials: true });
                dispatch(setMyOrders(result.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, [userData, dispatch]); // Added dispatch to dependency array
}

export default useGetMyOrders;