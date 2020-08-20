<template>
  <div>
    <display-post :post="post" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PostModel } from '../../../types/models'
import DisplayPost from '../../../components/DisplayPost.vue'
export default Vue.extend({
  components: {
    DisplayPost
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
