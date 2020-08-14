export const nullSafeArr = ( array )=>{
    if(!array){
        return []
    }
    if(array !==null || array !==undefined ){
        return array
    }
}