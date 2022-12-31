<!--
 * @Author: lzp
 * @Date: 2022-12-31 12:14:55
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 22:00:49
 * @Description: 创建任务
-->
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useMessage } from "naive-ui";
import { TaskListItem } from "../type/type";
import { taskListDataSetter } from "../store/TaskData";
const message = useMessage();
const hours: Ref<number[]> = ref([]);
const minutes: Ref<number[]> = ref([]);
const getHours = () => {
  const enable: number[] = [];
  const time = new Date();
  for (let hour = time.getHours(); hour < 24; hour++) {
    enable.push(hour);
  }
  hours.value = enable;
};
const getMinutes = () => {
  const enable: number[] = [];
  const time = new Date();
  for (let minute = time.getMinutes() + 1; minute < 60; minute++) {
    enable.push(minute);
  }
  console.log(enable);

  minutes.value = enable;
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
      :hours="hours"
      :minutes="minutes"
      format="h:mm a"
      class="ml-3 w-56"
      :on-update:value="setRemindTime"
      :on-focus="
        () => {
          getHours();
          getMinutes();
        }
      "
    />
  </div>
</template>
<style lang="scss" scoped></style>
