//https://www.acmicpc.net/problem/1673
var k = 5;
var n = 100;
var cnt = n;

while(k <= n) {
  cnt += (n / k);
  n = (n / k) + (n % k);
}

console.log(parseInt(cnt));