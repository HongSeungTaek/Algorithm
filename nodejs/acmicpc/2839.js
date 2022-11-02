//https://www.acmicpc.net/problem/9625
var K = 10;
var res = 'A';

for(var i=0; i<K; i++) {
  res = res.split('');
  for(var j=0; j<res.length; j++) {
    res[j] = (res[j] == 'A'? res[j].replace('A', 'B') : res[j].replace('B', 'BA'));
  }
  res = res.join('');
}
console.log(res);