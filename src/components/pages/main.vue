<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/main-navbar'
import Footer from '@/components/main-footer'

export default {
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
