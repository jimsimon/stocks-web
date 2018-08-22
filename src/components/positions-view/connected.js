import {connect} from "../../mixins/connect";
import {PositionsView} from './definition'
import {fetchInstruments} from "../../store/branches/instruments/actions";
import {selectInstruments} from "../../store/branches/instruments/selectors";
import {selectPositions} from "../../store/branches/positions/selectors";
import {fetchPositions} from "../../store/branches/positions/actions";

function mapStateToProps (state) {
  const positions = selectPositions(state)
  const instruments = positions.results.map(r => r.instrument)
  return {
    instruments: selectInstruments(state, instruments),
    positions
  }
}

const mapDispatchToProps = {
  fetchInstruments,
  fetchPositions
}

customElements.define('positions-view', connect(PositionsView, mapStateToProps, mapDispatchToProps))
