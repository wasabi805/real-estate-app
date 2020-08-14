import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { DUMMY_LIST } from "../../constants/routes";

export function* fetchDummyDataSaga() {
    try{
        const response = yield call(()=>{
            return axios.get( DUMMY_LIST ).then(
                (res)=> {
                    console.log( res )
                    return res
                } )
        });

        yield put({
           type : 'UPDATE_DUMMY_DATA',
           payload : response.data
        });

    }catch(e){
        console.log('there was an error in fetchDummyDataSaga:' , e )
    }
}

export function* fetchSearchResultsSaga() {
   try{
       const response = yield call(()=>{
           return axios.get( DUMMY_LIST ).then(
               (res)=> {
                   console.log( res )
                   return res
               } )
       });



   }catch(e){
       console.log(e)
   }
}