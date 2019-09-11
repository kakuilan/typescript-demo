// Object

declare function create(o: object|null):void;

create({prop:2});
create(null);

//create(42); //err
//create("string");//err
//create(false);//err
//create(undefined);//err
