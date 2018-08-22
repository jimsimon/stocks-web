import {callService} from "../../middleware/service-middleware";
import {SET_POSITIONS} from "./action-types";

export function fetchPositions () {
  return callService(
    'positions',
    'fetchPositions'
  )
}

export function setPositions (positions) {
  return {
    type: SET_POSITIONS,
    payload: positions
  }
}
