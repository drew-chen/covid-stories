<template>
  <div class="container">
    <div>
      <h1 class="title fade-in">
        covid-stories
      </h1>
      <app-post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :body-view-limit="280"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { createNamespacedHelpers } from 'vuex'
import { PostsModel } from '~/types/models'
const { mapGetters } = createNamespacedHelpers('posts')

export default Vue.extend({
  computed: {
    ...mapGetters({
      storePosts: 'posts'
    }),
    posts (): PostsModel {
      return this.storePosts
    }
  },
  head (): MetaInfo {
    return {
      title: 'Covid Stories',
      meta: [
        {
          hid: 'Home page',
          name: 'Home page',
          content: 'Wall of posts. Each post is a covid story.'
        }
      ]
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fade-in {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
