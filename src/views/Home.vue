<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/testPage.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    console.log(this.msg)
  }
}
</script>
