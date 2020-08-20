<template>
  <div>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
    <section>Posted by {{ post.userId }}</section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PostModel } from '../types/models'
export default Vue.extend({
  props: {
    // If limit is -1, then there is no limit.
    bodyViewLimit: {
      type: Number,
      default: -1
    },
    post: {
      type: Object as PropType<PostModel>,
      required: true
    }
  }
})
</script>

<style>

</style>
