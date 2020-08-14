import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import homeActions from '../../store/Home/Home.actions';
import homeSelectors from '../../store/Home/Home.selectors'
import { getNestedProperty } from "../../helpers/objectUtils";
import { fetchSearchResultsSaga } from "../../store/Home/Home.sagas";

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

    const onSubmitSearch = ()=>{
        dispatch({type: 'FETCH_SEARCH_RESULTS'})
    }

    const cityStateResults = useSelector(( state )=>{
        return homeSelectors.cityStateSearch(state)
    })

    return(
        <Home
            cityStateResults={ cityStateResults }
            onChangeSearchField={ onChangeSearchField }
            searchField={ searchField }
            onSubmitSearch={ onSubmitSearch }
        />
    )
}
export default HomeContainer