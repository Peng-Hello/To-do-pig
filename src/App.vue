<!--
 * @Author: lzp
 * @Date: 2022-12-31 09:14:41
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 17:19:13
 * @Description: Do not edit
-->
<script setup lang="ts">
import TaskList from "./components/TaskList.vue";
import CreateTask from "./components/CreateTask.vue";
import { Albums } from "@vicons/ionicons5";
</script>

<template>
  <n-message-provider
    ><div class="w-screen h-screen px-7 py-6">
      <n-space align="center" class="mb-5">
        <Albums class="text-slate-700 w-7"></Albums>
        <n-text class="text-2xl"> 任务列表 </n-text>
      </n-space>
      <TaskList></TaskList>
      <CreateTask></CreateTask></div
  ></n-message-provider>
</template>

<style scoped></style>
