import { handleActions } from 'redux-actions';
import actions from './Home.actions';

const initialStore = {
    cityState: {},
    searchField: "",
}
export default handleActions({
    [actions.updateDummyData] :( state , { payload } )=>{
        // console.log(payload.data)
       return{
           ...state,
           cityState : payload
       }
    },

    [actions.onChangeSearchField]:( state, { payload })=>{
        return{
            ...state,
            searchField : payload
        }
    }
} , initialStore )