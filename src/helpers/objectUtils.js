import { isArray , isObject } from './types';

export function getNestedProperty(obj, ...path ){
    if(!isObject(obj)){
        return undefined;
    }
    if(path.length === 0){
        return obj
    }

    let current = obj;
    for(let index = 0; index < path.length; index+= 1 ){
        current = current[path[index]];

        //If there is more path to traverse but the current value is not traversable, the quit.
        if(!Object(current) && !isArray(current) && (index + 1) < path.length){
            return undefined
        }
    }
    return current
}