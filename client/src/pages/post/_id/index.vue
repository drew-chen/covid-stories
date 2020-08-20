<template>
  <div>
    {{ $route.path }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DisplayPost from '../../../components/DisplayPost.vue'
export default Vue.extend({
  components: {
    DisplayPost
  }
})
</script>

<style>

</style>
