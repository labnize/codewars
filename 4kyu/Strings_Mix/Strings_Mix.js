function mix(s1, s2) {
    var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
    s1 = counter(s1); s2 = counter(s2);
    var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
    keys.forEach(key => {
        var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
    if (count>1) {
        var from = [1, '=', 2][Math.sign(c2-c1)+1];
        var str = [...Array(count)].map(_=>key).join('');
        res.push(from+':'+str);
    }
});
    return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}
