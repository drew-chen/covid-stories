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
import { SET_CURR_POST_ID } from '../../types/store/mutations.type'
import { PostModel } from '~/types/models'
const { mapMutations, mapGetters } = createNamespacedHelpers('posts')
export default Vue.extend({
  computed: {
    ...mapGetters(['currPost']),
    id (): number {
      return +this.$route.params.id
    }
  },
  created () {
    this.setCurrPost(this.id)
  },
  methods: {
    ...mapMutations([SET_CURR_POST_ID]),
    setCurrPost (id: number): PostModel | undefined {
      this[SET_CURR_POST_ID](id)
      return this.$store.getters.currPost as PostModel
    }
  }
})
</script>

<style>

</style>
