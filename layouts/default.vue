<script lang="ts" setup></script>

<template>
  <main>
    <Nav />
    <section>
      <slot />
    </section>
  </main>
</template>

<script>
  import { defineComponent } from 'vue';
  import Nav from '~/components/shared/layout/nav.vue';

  export default defineComponent({
    components: {
      Nav
    }
  })
</script>
