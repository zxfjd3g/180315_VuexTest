
import {ADD_TODO, DELETE_TODO, CLEAR_ALL_COMPLETE, SELECT_ALL_TODO}  from './mutation-types'

export default {
  addTodo ({commit}, todo) {
    // commit()向mutation传递的是包含数据的对象(不应该是数据本身)
    commit(ADD_TODO, {todo})
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  // 清除所有已完成的todo
  clearAllComplete ({commit}) {
    commit(CLEAR_ALL_COMPLETE)
  },

  // 全选/全不选
  selectAll ({commit}, isSelectAll) {
    commit(SELECT_ALL_TODO, {isSelectAll})
  }
}