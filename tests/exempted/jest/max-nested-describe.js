describe('Top Level Describe (1)', () => {
  describe('Nested Describe (2)', () => {
    describe('Nested Describe (3)', () => {
      describe('Nested Describe (4)', () => {
        describe('Nested Describe (5)', () => {
          describe('Nested Describe (6)', () => { // ✅️ exempted { max: 8 } of `jest/max-nested-describe`
            describe('Nested Describe (7)', () => { // ✅️ exempted { max: 8 } of `jest/max-nested-describe`
              describe('Nested Describe (8)', () => { // ✅️ exempted { max: 8 } of `jest/max-nested-describe`
                // noop
              })
            })
          })
        })
      })
    })
  })
})
