'use strict'

const isOfType=(()=>{
    const type = Object.create(null);

    type.null = x=> x === null;
    type.undefined = x=> x == 'undefined';
    type.nil = x=> type.null(x) || type.undefined(x);
    type.string = x=> !type.nil(x) && (typeof x == 'string' || x instanceof String); 
    type.number = x => !type.nil(x) && ( ( !isNaN(x) && isFinite(x) && typeof x == 'number') || x instanceof Number);
    type.boolean = x=> !type.nil(x) && ( typeof x == 'boolean' || x instanceof Boolean);
    type.array = x => !type.nil(x) && Array.isArray(x);
    type.object = x => ({}).toString.call(x) == '[Object Object]';
    type.type = (x,X)=> !type.nil(x) && x instanceof X;
    type.set = x=> type.type(x,Set);
    type.map = x => type.type(x ,Map);
    type.data = x=> type.type(x,Date);
    return type;


})
