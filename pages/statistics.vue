<template>
  {{ JSON.stringify(languageCount) }}
</template>

<script lang="ts">
import { useInterpreterStore } from '~~/stores/interpreter';

export default defineComponent({

  async setup() {
    const store = useInterpreterStore();
    if (store.getTotalCount === 0)
      await store.fetchInterpreters();
    return {
      languageCount: store.getLanguageCount
    }
  }
})
</script>
