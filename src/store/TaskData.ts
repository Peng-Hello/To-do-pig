/*
 * @Author: lzp
 * @Date: 2022-12-31 16:29:07
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-01 12:55:35
 * @Description: TaskList 数据
 */
import { ref, Ref } from "vue";
import { TaskListItem } from "../type/type";
export const taskList: Ref<TaskListItem[]> = ref([]);

function createReminder() {
  const newTask: TaskListItem = taskList.value[taskList.value.length - 1];
  const { remindTime, finished } = newTask;
  if (!finished && remindTime !== 0) {
    setTimeout(() => {
      //  调用 preload 脚本
      if (!newTask.finished) {
        window.openWindow.openRemindWindow();
      }
    }, remindTime);
  }
}

export function taskListDataSetter(value: TaskListItem) {
  taskList.value.push(value);
  createReminder();
}

export function taskListDataGetter() {
  return taskList.value;
}
