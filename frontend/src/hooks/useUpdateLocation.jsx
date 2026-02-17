// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { serverUrl } from '../config.js'
// import { useDispatch, useSelector } from 'react-redux'
// import {  setCurrentAddress, setCurrentCity, setCurrentState, setUserData } from '../redux/userSlice'
// import { setAddress, setLocation } from '../redux/mapSlice'

// function useUpdateLocation() {
//     const dispatch=useDispatch()
//     const {userData}=useSelector(state=>state.user)
 
//     useEffect(()=>{
// const updateLocation=async (lat,lon) => {
//     const result=await axios.post(`${serverUrl}/api/user/update-location`,{lat,lon},{withCredentials:true})
//     console.log(result.data)
// }

// navigator.geolocation.watchPosition((pos)=>{
//     updateLocation(pos.coords.latitude,pos.coords.longitude)
// })
//     },[userData])
// }

// export default useUpdateLocation

import axios from 'axios';
import React, { useEffect } from 'react';
import { serverUrl } from '../config.js';
import { useSelector } from 'react-redux';

function useUpdateLocation() {
    const { userData } = useSelector(state => state.user);

    useEffect(() => {
        // ✅ Added guard to prevent running if user is not loaded
        if (!userData) {
            return;
        }

        const updateLocation = async (lat, lon) => {
            try {
                const result = await axios.post(`${serverUrl}/api/user/update-location`, { lat, lon }, { withCredentials: true });
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        const watchId = navigator.geolocation.watchPosition((pos) => {
            updateLocation(pos.coords.latitude, pos.coords.longitude);
        });

        // Cleanup function to clear the watcher when component unmounts
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };

    }, [userData]);
}

export default useUpdateLocation;