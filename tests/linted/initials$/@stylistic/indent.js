/**
 * Sample function.
 *
 * @param {number} value - The value to double.
 * @param {boolean} ignore
 * @returns {number} The doubled value.
 */
export default function doubleValue (
  value,
  ignore
) {
  if (ignore) {
    return value
    } // ❌ `indent`

  return value + value
}
