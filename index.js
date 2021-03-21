function superbowlWin(x) {
    let check = x.find(function(v) {
        return v.result === "W";
    })
    if (typeof check === 'undefined') {
        return check
    } else {
        return check.year
    }   
}