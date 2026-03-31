<script setup>
import { onMounted } from "vue"
import { useVideoLoader } from "@/composables/useVideoLoader.js"
import { useScrollAnimation } from "@/composables/useScrollAnimation.js"

const props = defineProps({
  src: String,
  animateOnScroll: { type: Boolean, default: false } // A chave mágica
})

const { videoSrc, loadVideo } = useVideoLoader()

// Só executa o código de scroll se a prop for verdadeira
const scrollData = props.animateOnScroll ? useScrollAnimation(700) : null
const videoStyle = scrollData ? scrollData.videoStyle : {}

onMounted(() => {
  loadVideo(props.src)
})
</script>

<template>
  <div :class="['video-container', { 'scroll-wrapper': animateOnScroll }]">
    <video
      v-if="videoSrc"
      :src="videoSrc"
      :style="videoStyle"
      autoplay muted loop playsinline
      class="video-bg"
      @contextmenu.prevent
      oncontextmenu="return false;"
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableremoteplayback
    />
  </div>
</template>

<style scoped>
/* Estilo base para QUALQUER vídeo */
.video-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.video-bg {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.scroll-wrapper {
  height: 140vh; /* Cria o espaço de respiro para o scroll */
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  background-color: transparent; 
  margin-bottom: -20vh;
}

.scroll-wrapper .video-bg {
  position: sticky;
  top: 0;
  object-fit: cover;
  
}
</style>