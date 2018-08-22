export function selectInstruments (state, instruments) {
  const selectedInstruments = []
  instruments.forEach(i => {
    if (state.instruments[i]) {
      selectedInstruments.push(state.instruments[i])
    }
  })

  return selectedInstruments
}
