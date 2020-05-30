// Write your solution in this file!
function updateDriverWithKeyAndValue(obj,key,value){
return Object.assign({},obj,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
return  Object.assign(obj,{[key]:value});

}
function deleteFromDriverByKey(obj,key,){
  const obj = { foo: "bar" };

  const newObj = Object.assign({}, obj);

  newObj;
  // => { foo: "bar" }

  delete newObj['foo'];
  // => true

  newObj;
  // => {}

  obj;
}
function destructivelyDeleteFromDriverByKey(obj,key,){
  const obj = { foo: "bar" };

  const newObj = Object.assign({}, obj);

  newObj;
  // => { foo: "bar" }

  delete newObj['foo'];
  // => true

  newObj;
  // => {}

  obj;
}
