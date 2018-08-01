import {callService} from "../../middleware/service-middleware";
import {SET_INSTRUMENTS} from "./action-types";

export function fetchInstruments (instruments) {
  return callService(
    'instruments',
    'fetchInstruments',
    [instruments]
  )
}

export function setInstruments (instruments) {
  return {
    type: SET_INSTRUMENTS,
    payload: instruments
  }
}
