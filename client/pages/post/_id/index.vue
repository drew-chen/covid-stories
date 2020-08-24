<template>
  <div>
    <app-post :post="post" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PostModel } from '../../../types/models'
import AppPost from '../../../components/AppPost.vue'
export default Vue.extend({
  components: {
    AppPost
  },
  props: {
    post: {
      type: Object as PropType<PostModel>,
      required: true
    }
  }
})
</script>

<style>

</style>
