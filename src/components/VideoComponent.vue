<script setup>
import { onMounted } from "vue"
import { useVideoLoader } from "@/composables/useVideoLoader.js"
import { useScrollAnimation } from "@/composables/useScrollAnimation.js"

const props = defineProps({
  src: String,
  animateOnScroll: { type: Boolean, default: false },
  title: String,
  description: String,
  pills: Array
})

const { videoSrc, loadVideo } = useVideoLoader()
const scrollData = props.animateOnScroll ? useScrollAnimation(700) : null
const videoStyle = scrollData ? scrollData.videoStyle : {}

onMounted(() => {
  loadVideo(props.src)
})
</script>

<template>
  <div :class="['video-container', { 'scroll-wrapper': animateOnScroll }]">
    <div 
      class="video-overlay-content"
      :style="animateOnScroll ? videoStyle : {}
    ">
      <!-- Vídeo DENTRO do overlay-content -->
      <video
        v-if="videoSrc"
        :src="videoSrc"
        autoplay muted loop playsinline
        class="video-bg"
      />
      
      <div v-if="title || description" class="hero-layout">
        <div class="hero-left">
          <h1 class="hero-title">{{ title }}</h1>
        </div>
        
        <div class="hero-right">
          <div v-if="pills && pills.length" class="hero-pills">
            <span v-for="(pill, i) in pills" :key="i" class="pill">
              {{ pill }}
            </span>
          </div>
          <p class="hero-description">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 370px;
  }

.video-overlay-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* Layout do Texto - fica sobre o vídeo */
.hero-layout {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 80px 5%;
  box-sizing: border-box;
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.3); /* Overlay escuro para legibilidade */
}

.hero-left {
  max-width: 50%;
}

.hero-title {
  color: white;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-right {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pill {
  background-color: #e35ed8;
  color: white;
  padding: 8px 20px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
}

.hero-description {
  color: white;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

/* Ajuste para scroll animation se existir */
.scroll-wrapper {
  height: 140vh;
  margin-bottom: -25vh;
}

.scroll-wrapper .video-overlay-content {
  position: sticky;
  top: 0;
}

</style>