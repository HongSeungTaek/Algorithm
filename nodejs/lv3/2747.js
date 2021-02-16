//https://www.acmicpc.net/problem/2747
var len = 17;
var arr = [0,1];

for(var i=1; i<len; i++) {
  arr[i+1] = arr[i]+arr[i-1];
}
console.log(JSON.stringify(arr));