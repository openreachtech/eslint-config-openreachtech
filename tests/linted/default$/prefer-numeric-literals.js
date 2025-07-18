const array = [
  parseInt('111110111', 2), // ❌ `prefer-numeric-literals`
  parseInt('767', 8), // ❌ `prefer-numeric-literals`
  parseInt('1F7', 16), // ❌ `prefer-numeric-literals`

  Number.parseInt('111110111', 2), // ❌ `prefer-numeric-literals`
  Number.parseInt('767', 8), // ❌ `prefer-numeric-literals`
  Number.parseInt('1F7', 16), // ❌ `prefer-numeric-literals`
]

export default array
