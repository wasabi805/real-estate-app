import { getNestedProperty } from '../../helpers/objectUtils';

const getCityState = state => {
    return getNestedProperty( state, 'homeReducer', 'cityState', 'properties' || {})
}

export default {
    cityStateSearch : state =>{
        return getCityState( state )
    }
}

