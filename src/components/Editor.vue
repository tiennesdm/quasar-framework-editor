<template>
  <div class="q-pa-md q-gutter-sm">
    <form
      autocorrect="on"
      autocapitalize="on"
      autocomplete="on"
      spellcheck="True"
    >
      <q-editor
        ref="editor_ref"
        @paste.native="evt => pasteCapture(evt)"
        v-model="editor"
        class="box"
      />
       <q-btn color="primary" label="Save" @click="getEditor()" />
    </form>
     <q-card class="box" flat bordered v-for="(name,i) in arr1" :key="i">
      <q-card-section v-html="name.name" />
    </q-card>
  </div>
 
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props:['arr1'],
  data () {
    return {
      editor: 'Try pasting some rich text here,' +
        ' such as from Discord or Webstorm.' +
        '<br/>You can\'t paste images either!!!',
        arr:[]
    }
  },
  mounted: function(){
  //  get(){
     // this.$store.commit('')
          this.arr.push(this.editor);
          console.log(this.editor);
    //  },
  },
  methods: {
    ...mapMutations('editor', ['pushMutation','popMutation']),
    
      getEditor(){
        this.pushMutation(this.editor);
          this.arr.push(this.editor);
          console.log(this.editor);
       //   this.popMutation();
      },
     
      
    /**
     * Capture the <CTL-V> paste event, only allow plain-text, no images.
     *
     * see: https://stackoverflow.com/a/28213320
     *
     * @param {object} evt - array of files
     * @author Daniel Thompson-Yvetot
     * @license MIT
     */
    pasteCapture (evt) {
      let text, onPasteStripFormattingIEPaste
      evt.preventDefault()
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      }
      else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      }
      else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true
          this.$refs.editor_ref.runCmd('ms-pasteTextOnly', text)
        }
        onPasteStripFormattingIEPaste = false
      }
    }
  }
}
</script>
<style scoped>
.box{
    width: 400px;
}

    
</style>