<template>
  <div class="app-post">
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ limitedBody }}</p>
      <span v-if="displayEllipsis">
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
    },
    displayEllipsis (): boolean {
      return this.bodyViewLimit >= 0 && this.bodyViewLimit < this.post.body.length
    }
  }
})
</script>

<style scoped>

h1 {
  font-size: 1.5rem;
}

.app-post {
  border-radius: 5px;
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
}

</style>
