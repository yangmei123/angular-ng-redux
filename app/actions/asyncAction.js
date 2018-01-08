import * as types from '../constants/ActionTypes';

function showRedditAction(reddit, mark, level) {
  return {
    type: types.SHOW_REDDIT,
    mark,
    level,
    reddit
  };
}
/* @ngInject */
export default function asyncAction() {
  return {
    showRedditAction
  };
}
