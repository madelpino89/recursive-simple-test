<template>
  <Header />
  <Todo />
  <router-view />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Todo from "@/components/Todo.vue";
</script>
