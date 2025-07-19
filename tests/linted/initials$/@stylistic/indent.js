export default function doubleValue (
  value,
  ignore
) {
  if (ignore) {
    return value
    } // ❌ `indent`

  return value + value
}
