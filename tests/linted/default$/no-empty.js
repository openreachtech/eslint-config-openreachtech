/* eslint-disable no-restricted-syntax */

const alpha = false
const beta = 0

if (alpha) {} // ❌ `no-empty`

// eslint-disable-next-line no-unmodified-loop-condition
while (alpha) {} // ❌ `no-empty`

for (let next = 0; next < beta; next += 1) {} // ❌ `no-empty`

switch (beta) {} // ❌ `no-empty`

try /* ❌ `no-empty` */ {
} catch (error) /* ❌ `no-empty` */ {
} finally /* ❌ `no-empty` */ {
}

export default {
  alpha,
  beta,
}
