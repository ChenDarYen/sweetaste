<template>
  <div>
    <Alert class="message-alert"/>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Alert from '@/components/alert'
import Navbar from '@/components/main-navbar'
import Footer from '@/components/main-footer'

export default {
  data () {
    return {
    }
  },
  components: {
    Alert,
    Navbar,
    Footer
  }
}
</script>
<style scoped>
.message-alert {
  position: fixed;
  top: 100px;
}
</style>
