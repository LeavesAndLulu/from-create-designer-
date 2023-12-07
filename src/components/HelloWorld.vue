<!-- 主体承载页面 index.vue -->

<template>
  <div style="height: 100vh;width: 100vw;">
    <fc-designer ref="designer"/>
  </div>
 

</template>

<script setup>
import { createApp, ref, onMounted, watch,reactive ,nextTick} from "vue";
import { fcTable } from "./TableCustom.js"; //引入规则
const designer = ref()
onMounted(() => {


  //插入自定义菜单
  designer.value.addComponent(fcTable);
  designer.value.getRule();
  designer.value.appendMenuItem("main", {
    icon: fcTable.icon,
    name: fcTable.name,
    label: fcTable.label,
  });
 

});



</script>