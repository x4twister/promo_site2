<template>
  <b-container>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#5b5b5b"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="slide in slides" :key="slide" v-bind:caption="slide.subtitle" img-blank img-alt="Blank image">
        <p>
          {{slide.text}}
        </p>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
import json from '../assets/data.json'
export default {
  name: 'app',
  data () {
    return {
      slides: json.blocks
    }
  },
  mounted: function () {
    document.title = json.title
  }
}
</script>

<style>
</style>
