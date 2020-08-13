import { handleActions } from 'redux-actions';
import actions from './Home.actions';

const initialStore = {
    data: {}
}
export default handleActions({
    [actions.updateDummyData] :( state , { payload } )=>{
       return{
           ...state,
           data : payload
       }
    }
} , initialStore )