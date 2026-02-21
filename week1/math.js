function gp(a1, d, n){
  let ans = []
  for(let i = 0; i < n; i++){
    ans.push(a1 + d * i);
  }
  return ans
}

function avrg(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += Number(arr[i]);
  }
  return sum / arr.length;
}


module.exports = {
  gp,
  avrg
};
