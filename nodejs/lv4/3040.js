//https://www.acmicpc.net/problem/3040
//var shorts = [7,8,10,13,15,19,20,23,25];
var shorts = [8,6,5,1,37,30,28,22,36];
var del = [];
var sum = -100;
for(var i=0; i<shorts.length; i++) {
  sum += shorts[i];
}

for(var i=0; i<shorts.length-1 && del.length < 1; i++) {
  for(var j=i+1; j<shorts.length; j++) {
    if(shorts[i]+shorts[j] == sum) {
      del.push(shorts[i]);
      del.push(shorts[j]);
      break;
    }
  }
}

for(var j=0; j<del.length; j++) {
  shorts.splice(shorts.indexOf(del[j]), 1);
}

console.log(JSON.stringify(shorts));