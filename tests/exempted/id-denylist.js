const alpha = {}

alpha.attrs = {} // ✅️ ['attrs'] of `id-denylist`

const beta = {
  data: {}, // ✅️ ['data'] of `id-denylist` against the key of a GraphQL response in tests/**
}

export default {
  alpha,
  beta,
}
