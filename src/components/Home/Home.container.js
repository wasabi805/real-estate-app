import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import homeActions from '../../store/Home/Home.actions';
import homeSelectors from '../../store/Home/Home.selectors'

import Home from './Home';
const HomeContainer =()=>{
    useEffect(()=>{
        homeActions.fetchDummyData()
    },[]);

    const cityStateResults = useSelector(( state )=>{
        return homeSelectors.cityStateSearch(state)
    })

    return(
        <Home
            cityStateResults={ cityStateResults }
        />
    )
}
export default HomeContainer