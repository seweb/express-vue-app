<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <pre>{{ products }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      products: state => state.products
    })
  },

  async mounted() {
    await this.$store.dispatch('getProducts')
  },
  components: {
   
  }
}
</script>
