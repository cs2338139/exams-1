// Enum：
// 中文直譯是列舉，是一種特殊的類型，用於定義常數值的集合。對程式的可讀性有很大的幫助。
// 常見的使用場景有：定義一些固定的常數值，例如：性別、顏色、星期幾等。

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

function getColorName(color: Color): string {
  return color;
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));

//定義了個顏色的枚舉類型，然後定義了一個函數，接收一個顏色的枚舉值，返回這個顏色的名字。
