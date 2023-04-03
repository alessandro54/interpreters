<template>
  <section>
    <Table />
  </section>
</template>

<script lang="ts">
import { useInterpreterStore } from '~~/stores/interpreter';
import Table from '~~/components/interpreters/table.vue';

export default defineComponent({
  components: {
    Table
  },
  async setup() {
    const store = useInterpreterStore();
    if (store.getTotalCount === 0)
      await store.fetchInterpreters();
  }
})
</script>
