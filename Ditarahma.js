"use strict";
function slicer(text, first_index, last_index) {
    var hasil = "";
    for (var i = first_index; i < last_index; i++) {
        hasil += text[i];
    }
    return hasil;
}
console.log(slicer("Learning Typescript is different than Javascript", 9, 19));
