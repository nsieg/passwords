<template>
    <input 
        @click="activate($event)" 
        @focus="activate($event)" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        readonly="readonly" />    
</template>

<script>
export default {
  name: 'ImportNoAuto',
  methods: {
    activate: function(event) {
        event.target.removeAttribute('readonly')
    }
  },
  props: {
    'modelValue': String
  },
  emits: ['update:modelValue']
}
</script>