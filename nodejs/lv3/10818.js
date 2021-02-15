//https://www.acmicpc.net/problem/10818
var N = 5;
var nums = [];
var max = 1000000;
var min = -1000000;

for(var i=0; i<N; i++) {
  nums[i]=(Math.floor(Math.random() * (max - min)) + min)
}
console.log(nums);

for(var i=0; i<N-1; i++) {
  for(var j=i+1; j<N; j++) {
    if(nums[i] > nums[j]) {
      var m = nums[i];
      nums[i] = nums[j];
      nums[j] = m;
    }
  }
}
console.log(nums[0],nums[N-1]);