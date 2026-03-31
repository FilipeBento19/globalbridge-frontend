<script setup>
import PhotoGrid from '@/components/PhotoGridComponent.vue'

const fotosEsquerda = [
  '/images/testglobalbridge1.jpg',
  '/images/testglobalbridge2.jpg',
  '/images/testglobalbridge4.jpg',
  '/images/testglobalbridge3.jpg'
]

const fotosDireita = [
  '/images/testglobalbridge4.jpg',
  '/images/testglobalbridge3.jpg',
  '/images/testglobalbridge1.jpg',
  '/images/testglobalbridge1.jpg'
]
</script>

<template>
  <main>
    <div style="height: 100vh;"></div>

    <PhotoGrid 
      :imagesCol1="fotosEsquerda" 
      :imagesCol2="fotosDireita" 
    />
    
    <div style="height: 100vh;"></div>
  </main>
</template>
<style scoped>
</style>