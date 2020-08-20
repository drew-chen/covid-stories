<template>
  <div>
    <!-- Passes prop to child components in the /_id directory. -->
    <nuxt-child :post="currPost" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { SET_CURR_POST_ID } from '../../types/store/mutations.type'
const { mapMutations, mapGetters } = createNamespacedHelpers('posts')
export default Vue.extend({
  computed: {
    ...mapGetters(['currPost'])
  },
  created () {
    this[SET_CURR_POST_ID](this.$route.params.id)
    console.log(this.currPost)
  },
  methods: {
    ...mapMutations([SET_CURR_POST_ID])
  }
})
</script>

<style>

</style>
