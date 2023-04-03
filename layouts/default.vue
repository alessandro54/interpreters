<script lang="ts" setup></script>

<template>
  <Nav />
  <main class="lg:h-[calc(100vh-65px)] pb-20 lg:pb-0 bg-white overflow-auto">
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
