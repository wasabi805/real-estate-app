import { handleActions } from 'redux-actions';
import actions from './Home.actions';

const initialStore = {
    cityState: {}
}
export default handleActions({
    [actions.updateDummyData] :( state , { payload } )=>{
        // console.log(payload.data)
       return{
           ...state,
           cityState : payload
       }
    }
} , initialStore )