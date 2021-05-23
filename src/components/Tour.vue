<template>
    <a @click="startTour">
        <font-awesome-icon icon="question-circle" size="lg" />
    </a> 
</template>

<script>
import introJs from 'intro.js';

export default {
  name: 'Tour',
  methods: {
    startTour () {
        introJs().setOptions({ 
          showBullets: false,
          hidePrev: true,
          nextToDone: true,
          showProgress: false,


          steps: [{
            element: document.querySelector('.tour-step-1'),
            intro: 'Enter a secret master password here.'
          },
          {
            element: document.querySelector('.tour-step-2'),
            intro: 'The symbols depend on your master password. Remember them to check for typos when typing your master password.'
          },
          {
            element: document.querySelector('.tour-step-3'),
            intro: 'Enter an alias that describes what the password is for. Examples: amazon, github.com'
          },
          {
            element: document.querySelector('.tour-step-4'),
            intro: 'A password is created based on your master and alias. Click the button to copy it.'
          },{
            element: document.querySelector('.tour-step-5'),
            intro: 'This is another password, which has at least 2 lower, upper and special characters as well as 2 digits.'
          }]
        }).start()
    }
  }
}
</script>