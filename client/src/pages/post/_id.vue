<template>
  <div>
    <!-- Passes prop to child components in the /_id directory. -->
    <nuxt-child
      v-if="currPost"
      :post="currPost"
    />
    <div v-else>
      error 404
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { PostModel } from '~/types/models'
const { mapGetters } = createNamespacedHelpers('posts')
export default Vue.extend({
  computed: {
    ...mapGetters({
      storeGetPostById: 'getPostById'
    }),
    id (): number {
      return +this.$route.params.id
    },
    currPost (): PostModel {
      return this.getPostById(this.id)
    }
  },
  methods: {
    // Store wrapper to provide typing.
    getPostById (id: number): PostModel {
      return this.storeGetPostById(id)
    }
  }
})
</script>

<style>

</style>
