var mix1 = [1, 'data', '3', 'result'];
var mix2 = ['Bejo', 'has', '4', 'sport', 'car'];
function kombinasi(text) {
    var result = "";
    text.map(function (text) {
        result = result + " " + text;
    });
    return result;
}
console.log(kombinasi(mix1));
console.log(kombinasi(mix2));
