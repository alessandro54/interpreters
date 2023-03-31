<template>
  <section>
    <h1>das</h1>
  </section>
</template>

<script lang="ts">
  import InterpretersService from '~/services/interpreters.service';

  export default defineComponent({
    async setup() {
      const { datalist } = await InterpretersService.fetchAll();

      return { datalist }
    }
  })
</script>
