<template>
    <a @click="copyHash">
        <font-awesome-icon icon="copy" :style="{ color: isCopied(algo) ? 'black' : 'white' }" size="lg" />
    </a> 
</template>

<script>
import { mapGetters } from 'vuex'
import { COPY } from './../store/mutation-types'

export default {
  name: 'ButtonCopy',
  props: [
    'algo'
  ],
  methods: {
    copyHash () {
      this.$store.commit(COPY, this.$props.algo)
    }
  },
  computed: {
    ...mapGetters([ 'isCopied' ]),
  }
}
</script>