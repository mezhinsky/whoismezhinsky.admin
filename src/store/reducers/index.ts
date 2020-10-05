import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import login from '../../containers/LoginPage/reducer'
import posts from "../../containers/PostsPage/reducer"
import post from '../../containers/PostDetailPage/reducer'
import tags from '../../containers/TagsContainer/reducer'

import history from '../../utils/history'


const reducers = combineReducers({
  login,
  post,
  posts,
  tags,
  router: connectRouter(history),
});
export default reducers;