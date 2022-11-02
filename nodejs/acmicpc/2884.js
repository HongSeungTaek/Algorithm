//https://www.acmicpc.net/problem/2884
var hh = 23;
var mm = 40;
var sum = -45;

console.log(hh,mm);

mm += sum;

if(mm < 0) {
  hh -= 1;
  mm = (60 + mm);
}

if(hh < 0) hh = 23;

console.log(hh,mm);