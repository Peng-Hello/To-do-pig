<!--
 * @Author: lzp
 * @Date: 2022-12-31 12:14:55
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-01 13:57:06
 * @Description: 创建任务
-->
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useMessage } from "naive-ui";
import { TaskListItem } from "../type/type";
import { taskListDataSetter } from "../store/TaskData";
const message = useMessage();
const hours: Ref<number[]> = ref([]);

const getHours = () => {
  const enable: number[] = [];
  const time = new Date();
  for (let hour = time.getHours(); hour < 24; hour++) {
    enable.push(hour);
  }
  hours.value = enable;
};

const form: Ref<TaskListItem> = ref({
  title: "",
  remindTime: 0,
  finished: false,
});
function setRemindTime(value: number | null) {
  if (value) {
    const diffTime = value - Date.now();
    if (diffTime >= 0) {
      form.value.remindTime = value - Date.now();
    }
  } else {
    form.value.remindTime = 0;
  }
}
function launch() {
  taskListDataSetter(form.value);
  form.value = {
    title: "",
    remindTime: Date.now(),
    finished: false,
  };
  message.success("新建任务成功");
}

// 调整分钟封禁
function isMinuteDisabled(minute: number, hour: number | null) {
  const time = new Date();
  const nowHour = time.getHours();
  const nowMinute = time.getMinutes();
  if (hour === nowHour && minute <= nowMinute) {
    return true;
  }
  return false;
}
</script>
<template>
  <div class="flex mt-7">
    <n-input
      clearable
      type="text"
      placeholder="请输入任务, Enter 新建任务..."
      v-model:value="form.title"
      @keyup.enter="launch"
    />
    <n-time-picker
      placeholder="选择提醒时间"
      clearable
      class="ml-3 w-56"
      format="h:mm a"
      :hours="hours"
      :is-minute-disabled="isMinuteDisabled"
      :on-update:value="setRemindTime"
      :on-focus="
        () => {
          getHours();
        }
      "
    />
  </div>
</template>
<style lang="scss" scoped></style>
