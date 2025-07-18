/* eslint-disable jsdoc/require-jsdoc */

{ // ✅ exempted `no-lone-blocks
  // I am lonely block
}

function noLonelyBlocksFunc (code) {
  {
    const languageCode = 2

    if (code === languageCode) {
      return 'Japanese'
    }
  }

  { // ✅ exempted `no-lone-blocks
    return 'English'
  }
}

export default noLonelyBlocksFunc
