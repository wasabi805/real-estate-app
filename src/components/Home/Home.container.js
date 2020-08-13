import React, { useEffect } from 'react';
import homeActions from '../../store/Home/Home.actions';

import Home from './Home';
const HomeContainer =()=>{

    useEffect(()=>{
        homeActions.fetchDummyData()
    },[]);

    return(
        <Home/>
    )
}
export default HomeContainer