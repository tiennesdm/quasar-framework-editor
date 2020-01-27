<template>
  <q-page class="flex">
    <center>
     <Editor :arr1="someGetter"/>
    </center>
  <!---  <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import Editor from '../components/Editor'
export default {
  name: 'PageIndex',
  components:{
    Editor

  },
  computed: {
    ...mapGetters('editor', ['someGetter']),
      post(){
      console.log(this.$store.state.state);
    }
   /* get(){
      console.log(this.$store.getters['editor/someGetter']);
      var arr = this.$store.getters['editor/someGetter'];
      for(let i=0; i<arr.length;i++){
        console.log(arr[i].id);
        console.log(arr[i].name);
      }
      console.log(this.$store.state);
    }*/
  },
}
</script>
