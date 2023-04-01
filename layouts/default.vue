<script lang="ts" setup></script>

<template>
  <Nav />
  <main class="min-h-screen bg-white">
    <slot />
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
