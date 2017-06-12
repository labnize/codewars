function humanReadable(seconds) {
    var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
    return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
}

function formatDate(n){
    var number = Number.parseInt(n)
    return number > 9? number : '0'+number;
}