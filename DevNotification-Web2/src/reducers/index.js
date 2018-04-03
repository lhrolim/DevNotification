import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {config} from './config'

import {colors, backgroundColors} from './colors'
import {navigation} from './navigation'
import {contactUs} from './pages/contact-us'
import {createAccount} from './pages/create-account'
import {login} from './pages/login'
import {resetPassword} from './pages/reset-password'
import {subscribe} from './pages/subscribe'
import {underMaintenance} from './pages/under-maintenance'
import {unlockAccount} from './pages/unlock-account'
import {accountSettings} from './pages/account-settings'
import {emailPreferences} from './pages/email-preferences'
import {securitySettings} from './pages/security-settings'
import {reducer as notificationsReducer} from 'reapop'

import global from '../devnotification/core/global/globalreducer'
import authState from '../devnotification/core/authentication/reducer';
import user from '../devnotification/core/user/reducer';
import modal from '../devnotification/components/modal/modalreducer';

const rootReducer = combineReducers({
  authState,
  global,
  modal,
  user,
  config,
  colors,
  backgroundColors,
  navigation,
  contactUs,
  createAccount,
  login,
  resetPassword,
  subscribe,
  underMaintenance,
  unlockAccount,
  accountSettings,
  emailPreferences,
  securitySettings,
  router: routerReducer,
  notifications: notificationsReducer()
})
export default rootReducer
