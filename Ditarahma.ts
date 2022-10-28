let mix1 = [1, 'data', '3', 'result']
let mix2 = ['Bejo', 'has', '4', 'sport', 'car']

function kombinasi(text: (string | number)[]): string 
{
    let result: string = "";
    text.map((text) => 
    {
      result = result + " " + text;
    });
    return result;
}

console.log(kombinasi(mix1));
console.log(kombinasi(mix2));