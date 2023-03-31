<template>
  <section>
    <Table :interpreters="data"/>
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

    await store.fetchInterpreters();

    const data = store.getInterpreters();

    return { data }
  }
})
</script>
