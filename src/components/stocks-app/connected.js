import {StocksApp} from "./definition";
import {connect} from '../../mixins/connect'
import {navigateToWatchlist, navigateToPositions} from "../../store/branches/navigation/actions";

const mapDispatchToProps = {
  navigateToWatchlist,
  navigateToPositions
}

customElements.define('stocks-app', connect(StocksApp, null, mapDispatchToProps));
