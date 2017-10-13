module.exports = ml

function ml(...args) {
  const lines = append.lines = []  
  setupProperties(append)
  append(...args)
  return append

  function append(...args) {
    lines.push(String.raw(...args))
    return append
  }
}

function setupProperties(append, lines) {
  Object.defineProperties(append, {
    end: { get() { return this.toString() } },
    toString: {
      value: toString
    }
  })
}

function toString() {
  return this.lines.join('\n')
}

if (module === require.main) {
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
}