import {
  store
} from './store'
import * as Constants from '../constants'

export function setActiveOption(option) {
  return {
    type: Constants.SET_ACTIVE_OPTION,
    option
  }
}