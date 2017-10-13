Multiline strings that respect the indentation
of your source.

## Example  
```js
const ml = require('manyline')

console.log(
  ml `Hello, world.`
     `ml lets you do multiline text sequences`
     `You can end them with .end` .end
)

console.log(
  ml `You can get get the lines as an`
     `array with .lines` .lines
)

console.log(
  ml `Interpolation works as with String.raw:`
     `2 + 2 = ${2 + 2}` .end
)

console.log(
  ml `And you can,`
     `if you like,`
     `use .toString()` .toString()
)
```
