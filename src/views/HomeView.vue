<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import VideoComponent from "@/components/VideoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
// sem alterações
</script>

<template>
  
  <VideoComponent src="/videos/overlayglobalbrige.mp4" 
    animateOnScroll 
    class="baseoverlay"
  />
  <HeaderComponent 
  class="header"
  />
  <section class="content-layout">
    <ButtonComponent 
      text="Work with us" 
      iconPath="/icons/icon_button.png" 
    />
  </section>
</template>

<style scoped>
header {
  position: fixed;
  justify-self: center;
  top: 0;
  width: 100%;
  height: 80px; /* Defina uma altura fixa para o seu header */
  background-color: #fff;
  z-index: 1000; /* Garante que o header fique sempre na frente do vídeo */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.baseoverlay {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.content-layout {
  justify-self: center;
}
</style>