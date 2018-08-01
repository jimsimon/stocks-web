import {navigateToWatchlist} from "../../store/branches/navigation/actions";
import {LoginView} from "./definition";
import {login} from "../../store/branches/authentication/actions";
import {connect} from "../../mixins/connect";

const mapDispatchToProps = {
  login,
  navigateToWatchlist
}

customElements.define('login-view', connect(LoginView, null, mapDispatchToProps))
