<template>
    <el-table v-bind="config" :data="data">
        <el-table-column v-for="col in columns" :key="col.prop" :prop="col.prop" :label="col.label" v-bind="col" />
        {{ col }}
    </el-table>
  </template>
  
  <script setup>
  import {defineOptions, defineProps} from 'vue'
  
  defineOptions({
      name: 'table'
  })
  
  defineProps({
      data: {
          type: Array,
          default: () => []
      },
      config: {
          type: Object,
          default: () => ({})
      },
      columns: {
          type: Array,
          default: () => []
      }
  })
  </script>