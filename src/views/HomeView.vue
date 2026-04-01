<script setup>

import VideoComponent from "@/components/VideoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <section class="content-header">
    <VideoComponent src="/videos/overlayglobalbrige.mp4" 
      animateOnScroll 
      class="baseoverlay"
    />
  </section>
  

  <section class="content-layout">
    <ButtonComponent 
      text="Work with us" 
      iconPath="/icons/icon_button.png" 
    />
  </section>
</template>

<style scoped>


.baseoverlay {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.content-layout {
  justify-self: center;
  padding-bottom: 40vw;
}
</style>