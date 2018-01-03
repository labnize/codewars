function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  var arr = [];
  for (var i=0; i < n; i++){
    var temp = [];
    for(var j=0; j<= i; j++){
      if(j===0 || j===i){
        temp.push(1);
      }else{
        temp.push(arr[i-1][j-1] + arr[i-1][j]);
      }
    }
    arr.push(temp);
  }
  return arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}