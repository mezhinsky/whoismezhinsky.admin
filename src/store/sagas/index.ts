import { all, fork } from 'redux-saga/effects'

import * as postsSagas from '../../containers/PostsPage/saga'
import * as postSagas from '../../containers/PostDetailPage/saga'
import * as loginSagas from '../../containers/LoginPage/saga'
import * as TagsSagas from '../../containers/TagsContainer/saga'

function* rootSaga() {
  yield all(
    [...Object.values(postsSagas), ...Object.values(TagsSagas), ...Object.values(postSagas), ...Object.values(loginSagas)].map(fork)
  )
}

export default rootSaga;