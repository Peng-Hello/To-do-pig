<!--
 * @Author: lzp
 * @Date: 2022-12-31 11:44:58
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 21:54:53
 * @Description: 任务列表
-->
<script lang="ts" setup>
import { useMessage } from "naive-ui";
import {
  RadioButtonOff,
  TimeOutline,
  CheckmarkCircleOutline,
  HappyOutline,
} from "@vicons/ionicons5";
import { taskList } from "../store/TaskData";
const message = useMessage();
// 格式化时间
function formatTime(diffTime: number) {
  return Math.ceil(diffTime / 1000 / 60);
}
</script>
<template>
  <n-scrollbar class="max-h-80 overflow-x-hidden">
    <n-card class="mb-3" v-for="item in taskList" :key="item.title">
      <div class="flex items-center">
        <CheckmarkCircleOutline
          class="w-5 mr-2"
          v-if="item.finished"
        ></CheckmarkCircleOutline>
        <RadioButtonOff
          class="w-5 mr-2"
          v-else
          @click="
            () => {
              item.finished = true;
              message.success('恭喜你又完成一个任务,世界和平!');
            }
          "
        ></RadioButtonOff>

        <div :class="{ 'inline-block': true, 'line-through': item.finished }">
          {{ item.title }}
        </div>
        <div class="flex-grow flex items-center justify-end">
          <TimeOutline class="w-5 mr-1"></TimeOutline
          ><span class="mr-1">:</span>
          <span>{{
            item.remindTime === 0
              ? "无提醒"
              : formatTime(item.remindTime) + "分"
          }}</span>
        </div>
      </div>
    </n-card>
    <div
      v-if="taskList.length === 0"
      class="text-lg h-60 flex items-center justify-center"
    >
      <span class="mr-2">暂时没有任务</span>
      <HappyOutline class="w-7"></HappyOutline>
    </div>
  </n-scrollbar>
</template>
<style scoped></style>
