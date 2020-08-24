<template>
  <div>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ limitedBody }}</p>
      <span v-if="bodyViewLimit >= 0">
        ...
      </span>
    </article>
    <section>Posted by {{ post.userId }}</section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PostModel } from '../types/models'
export default Vue.extend({
  props: {
    // If limit is < 0, then there is no limit.
    bodyViewLimit: {
      type: Number,
      default: -1
    },
    post: {
      type: Object as PropType<PostModel>,
      required: true
    }
  },
  computed: {
    // Return type annotation is needed due to 'this' keyword.
    limitedBody (): String {
      if (this.bodyViewLimit < 0) {
        return this.post.body
      }
      return this.post.body.slice(0, this.bodyViewLimit)
    }
  }
})
</script>

<style>

</style>
