// Write your solution in this file!
function updateDriverWithKeyAndValue(obj,key,value){
Object.assign({},obj,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(){
  Object.assign(obj,{[key]:value});

}
function deleteFromDriverByKey(){
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
function destructivelyDeleteFromDriverByKey(){
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
