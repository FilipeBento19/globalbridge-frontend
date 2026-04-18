<script setup>
import VideoComponent from "@/components/VideoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import PhotoGrid from '@/components/PhotoGridComponent.vue'
import Landing from '@/components/LandingComponent.vue';

const fotosEsquerda = [
  '/images/imagemgb1.png',
  '/images/imagemgb2.png',
  '/images/imagemgb4.png',
  '/images/imagemgb3.png'
]

const fotosDireita = [
  '/images/imagemgb4.png',
  '/images/imagemgb3.png',
  '/images/imagemgb1.png',
  '/images/imagemgb2.png'
]
</script>

<template>
  <section class="content-header">
    <VideoComponent 
      src="/videos/overlayglobalbridge.mp4" 
      animateOnScroll 
      title="MOLDE SEU PRÓPRIO FUTURO"
      description="Com uma plataforma acessível e centralizada, o GlobalBridge amplia oportunidades de intercâmbio e conecta usuários a destinos e agências confiáveis."
      :pills="['Mais de 40 países', 'Use gratuitamente']"
    />
  </section>

  <section class="content-layout">
    <PhotoGrid :imagesCol1="fotosEsquerda" :imagesCol2="fotosDireita" />
  </section>

  <section>
    <Landing />
  </section>
</template>

<style scoped>
.content-header {
  width: 100%;
  overflow-x: hidden;
}

.content-layout {
  justify-self: center;
  width: 100%;
}
</style>