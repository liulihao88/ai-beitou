<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import Header from '@/views/header.vue'

const { proxy } = getCurrentInstance()
</script>

<template>
  <div>
    <Header></Header>
    <!-- <g-base></g-base> -->
    <!-- <g-init></g-init> -->
    <!-- <g-7nodes></g-7nodes> -->
    <!-- <g-add-node></g-add-node> -->
    <g-vue></g-vue>
  </div>
</template>
