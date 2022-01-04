const arr =[{"value":"abc","checked":true},{"value":"xyz","checked":false},{"value":"lmn","checked":true}];

 const result = arr.filter(res=>res.checked).map(ele=>ele.value);
 
 console.log(result);