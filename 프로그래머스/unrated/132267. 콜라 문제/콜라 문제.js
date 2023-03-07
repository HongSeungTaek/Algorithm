function solution(a, b, n) {
    var answer = 0;
    
    while(n > n % a) {
        var remainder = (n % a);
        n = Math.floor(n / a) * b;
        answer += n;
        n += remainder;
    }
    
    return answer;
}