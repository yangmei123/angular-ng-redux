import { combineReducers } from 'redux';
import { SHOW_REDDIT } from '../constants/ActionTypes';

const channelMeau = {
    module_name: '指令一级',
    link_url: 'javascript:; ',
    action: [{
      action_name: '提示',
      data: '/#/alert'
    }, {
      action_name: '确认框',
      data: '/#/confirm'
    }],
    class: 'glyphicon glyphicon-retweet'
  };
  const rudexMeau = {
    module_name: 'redux一级',
    link_url: 'javascript:; ',
    action: [{
      action_name: '提示',
      data: '/#/alert'
    }, {
      action_name: '确认框',
      data: '/#/confirm'
    }],
    class: 'glyphicon glyphicon-retweet'
  };
  const serviceMeau = {
    module_name: 'service一级',
    link_url: 'javascript:; ',
    action: [{
      action_name: '提示',
      data: '/#/alert'
    }, {
      action_name: '确认框',
      data: '/#/confirm'
    }],
    class: 'glyphicon glyphicon-retweet'
  };
const menuList = [channelMeau, rudexMeau, serviceMeau];

function showedReddit(state = menuList, action) {
  switch (action.type) {
  case SHOW_REDDIT:
    for (const value of state) {
      if (!action.level) {
        if (value.module_name === action.mark) {
          value.active = !value.active;
        } else {
          value.active = false;
        }
      } else if (value.module_name === action.level) {
        for (const liValue of value.action) {
          if (liValue.action_name === action.mark) {
            liValue.isActive = true;
          } else {
            liValue.isActive = false;
          }
        }
      } else {
        for (const liValue of value.action) {
          liValue.isActive = false;
        }
      }
    }
    return state;
  default:
    return state;
  }
}

const rootReducer = combineReducers({ showedReddit });

export default rootReducer;
