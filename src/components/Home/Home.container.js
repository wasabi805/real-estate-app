import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import homeActions from '../../store/Home/Home.actions';
import homeSelectors from '../../store/Home/Home.selectors'
import { getNestedProperty } from "../../helpers/objectUtils";

import Home from './Home';
const HomeContainer =()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        homeActions.fetchDummyData()
    },[]);

    const onChangeSearchField = (e)=>{
        dispatch(homeActions.onChangeSearchField(e.target.value))
    }
    const searchField = useSelector( ( state )=>(
        getNestedProperty( state , 'homeReducer' , 'searchField' )
    ))

    const cityStateResults = useSelector(( state )=>{
        return homeSelectors.cityStateSearch(state)
    })

    return(
        <Home
            cityStateResults={ cityStateResults }
            onChangeSearchField={ onChangeSearchField }
            searchField={ searchField }

        />
    )
}
export default HomeContainer