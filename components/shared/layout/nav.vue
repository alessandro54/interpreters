<template>
  <va-navbar>
    <template #right>
      <va-navbar-item>
        <NuxtLink to="/">
          Interpreters
        </NuxtLink>
      </va-navbar-item>
      <va-navbar-item>
        <NuxtLink to="statistics">
          Statistics
        </NuxtLink>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Nav'
  })
</script>
