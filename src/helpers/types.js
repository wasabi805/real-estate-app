export const isArray = val => Array.isArray( val )
export const isObject = val =>
    typeof val === 'object' && val !== null && !isArray( val )

