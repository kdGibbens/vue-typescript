<script setup lang="ts">
import { reactive } from 'vue';
import Counter from './components/Counter.vue';

interface AppInfoType {
  name: string;
  slogan: string;
}

const appInfo: AppInfoType = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});
</script>

<template>
  <h1>{{ appInfo.name }}</h1>
  <h2>{{ appInfo.slogan }}</h2>
  <Counter :limit="10" />
</template>
