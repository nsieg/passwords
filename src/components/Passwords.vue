<template>
  <div class="container container-padding">
    <form autocomplete="off">

      <div class="field">
        <label class="label">Master</label>  
        <div class="control">
          <div class="field has-addons">   
            <div class="control is-expanded">                  
              <input @input="updateMaster" :value="master" type="password" class="input" placeholder="master" id="master" />           
            </div>
            <div class="control">
              <span class="button is-static icon-min-width" v-html="masterIconString" />
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Service Alias</label>
        <div class="control">
          <InputNoAuto @input="updateAlias" :value="alias" type="text" class="input" placeholder="alias" id="alias" />
       </div>
      </div>

      <hr />

      <div v-for="algo in algos" :key="algo" class="field has-addons" data-intro='Hello step one!'>
        <div class="control is-expanded">
          <input :algo="algo" type="text" :value="hash(algo)" class="input" :id="'result-' + algo" readonly />
        </div>
        <div class="control">
          <ButtonCopy :algo="algo" class="button is-primary" />
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import InputNoAuto from './InputNoAuto'
import ButtonCopy from './ButtonCopy'
import { mapGetters, mapState } from 'vuex'
import { CHANGE_ALIAS, CHANGE_MASTER } from '../store/mutation-types.js'
import "intro.js/minified/introjs.min.css";

export default {
  name: 'Passwords',
  methods: {
    updateMaster (e) {
      this.$store.commit(CHANGE_MASTER, e.target.value)
    },
    updateAlias (e) {
      this.$store.commit(CHANGE_ALIAS, e.target.value)
    }
  },
  computed: {
    ...mapState([ 'master', 'alias' ]),
    ...mapGetters([ 'algos', 'hash', 'masterIconString' ]),
  },
  components: {
    InputNoAuto,
    ButtonCopy
  },
  mounted() {
    const introJS = require("intro.js");
    introJS.introJs().start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-padding {
  padding: 15px;
}

.icon-min-width {
  min-width: 100px;
}
</style>
