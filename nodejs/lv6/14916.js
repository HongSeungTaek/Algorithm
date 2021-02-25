//https://www.acmicpc.net/problem/14916
var n = 4;
var cnt = 0;

while(n > 0) {
  if(n > 4) {
    n -= 5;
  } else if(n % 2 == 0) {
    n -= 2;
  } else if(n % 2 == 1) {
    if(cnt == 0) {
      cnt = -1;
      break;
    }
    n+=3;
    continue;
  }
  cnt ++;
}

if(cnt == 0) cnt = -1;

console.log(cnt);