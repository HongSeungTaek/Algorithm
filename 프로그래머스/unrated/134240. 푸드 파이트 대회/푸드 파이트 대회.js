function solution(food) {
    var answer = '';

    for(var i=1; i<=food.length; i++) {
        var foodCnt = parseInt(food[i]/2);
        for(var j=0; j<foodCnt; j++) {
            answer += i;
        }
    }

    answer = (answer + '0' + answer.split('').reverse().join(''));

    return answer;
}