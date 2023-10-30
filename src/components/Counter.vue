<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchCount } from '../fetchCount';
import ControlBar from './ControlBar.vue';

interface Props {
  limit: number;
  alerMessageOnLimit?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alerMessageOnLimit: "can't go any higher",
});

const count = ref<number | null>(null);

const cb = (initialCount: number) => (count.value = initialCount);
onMounted(() => {
  fetchCount(cb);
});

const addCount = (num: number) => {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alerMessageOnLimit);
    } else {
      count.value += num;
    }
  }
};
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <ControlBar @add-count="addCount" @reset-count="count = 0" />
  </div>
</template>
