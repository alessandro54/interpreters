<template>
  <section>
    <div v-if="!loading">
      <Table :interpreters="data" />
    </div>
    <div v-else>
      <LoadingTable />
    </div>
  </section>
</template>

<script lang="ts">
import { useInterpreterStore } from '~~/stores/interpreter';
import Table from '~~/components/interpreters/table.vue';
import LoadingTable from '~~/components/interpreters/loading_table.vue';
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    Table,
    LoadingTable
  },
  async setup() {
    const store = useInterpreterStore();
    const { data, loading } = storeToRefs(store);
    return {
      store,
      data,
      loading
    }
  },
  async mounted() {
    if (this.store.getTotalCount === 0)
      await this.store.fetchInterpreters();
  }
})
</script>
