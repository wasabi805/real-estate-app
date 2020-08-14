import { getNestedProperty } from '../../helpers/objectUtils';

const getCityState = state => {
    return getNestedProperty( state, 'homeReducer', 'cityState', 'properties' || {})
}

const getSearchField = state =>{
    return getNestedProperty( state,'homeReducer', 'searchField' || "try again" )
}

export default {
    cityStateSearch : state =>{
        return getCityState( state )
    },
    searchField: state => getSearchField( state )
}

