//https://www.acmicpc.net/problem/16676
var n = 1144521;
n = (n+'').split('');
var res = 1;

for(var i=0; i< n.length-1; i++) {
  var cur = 1;
  for(var j=i+1; j< n.length; j++) {
    if(n[i] == n[j]) cur++;
  }

  if(res < cur) res = cur;
}
console.log(res);
