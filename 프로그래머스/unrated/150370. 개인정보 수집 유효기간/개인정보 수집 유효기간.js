function solution(today, terms, privacies) {
    var answer = [];
    //today = "2022.05.19";
    //terms = ["A 6", "B 12", "C 3"];
    //privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];
    var todayTime = new Date(today).getTime();
    
    
    for(var i=0; i<privacies.length; i++) {
        var privacy = privacies[i].split(" ");
        o:
        for(var j=0; j< terms.length; j++) {
            var term = terms[j].split(" ");
            if(privacy[1] == term[0]) {
                date = new Date(privacy[0]);
                date = new Date(date.setMonth(date.getMonth()+parseInt(term[1])));
                if(todayTime >= date.getTime()) {
                    answer.push(i+1);
                }
                break o;
            }
        }
    }
    return answer;
}