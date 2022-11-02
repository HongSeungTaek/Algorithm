//https://www.acmicpc.net/problem/14501
//const lastDay = 7;
//const works = [[3,10],[5,20],[1,10],[1,20],[2,15],[4,40],[2,200]];
//const lastDay = 10;
//const works = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]];
//const lastDay = 10;
//const works = [[5,10],[5,9],[5,8],[5,7],[5,6],[5,10],[5,9],[5,8],[5,7],[5,6]];
//const lastDay = 10;
//const works = [[5,50],[4,40],[3,30],[2,20],[1,10],[1,10],[2,20],[3,30],[4,40],[5,50]];
/*
var result = 0;
for(var j = 0; j<lastDay; j++) {
	var m = 0;
	for(var i = j; i < lastDay;) {
		var work = works[i];
		if((i+work[0]) > lastDay) break;
		i += work[0];
		m += work[1];
	}
	if(result < m) result = m;
	//console.log('=======');
}
//console.log(result);
*/
var n = 10;
var t = [5,4,3,2,1,1,2,3,4,5];
var p = [50,40,30,20,10,10,20,30,40,50];
var dp = [0,0,0,0,0,0,0,0,0,0,0];

for (var i=0; i<n; i++) {
	console.log('==',i,t[i]);
	if (i + t[i] <= n) {
		//날짜가 범위를 넘어가지 않는 경우
		dp[i + t[i]] = Math.max(dp[i + t[i]], dp[i] + p[i]);
		console.log('1',JSON.stringify(dp));
	}
	//현재 경우의 수가 0일 수 있기 때문에 이전의 최대값을 넣어줌.
	//해당 날짜에 일할 수 없다면, 이전까지 일한 최대 수당을 넣어주어야 한다.
	dp[i+1] = Math.max(dp[i+1], dp[i]);
	console.log('2',JSON.stringify(dp));
}
console.log(dp[n]);
