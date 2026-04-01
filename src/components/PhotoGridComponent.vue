<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  imagesCol1: Array,
  imagesCol2: Array
})

const col1 = ref(null)
const col2 = ref(null)

const photoSection = ref(null)

const handleScroll = () => {
  if (!photoSection.value) return
  
  const sectionTop = photoSection.value.offsetTop
  const scroll = window.scrollY - sectionTop
  
  const speed = 0.15 
  const startOffset = 50 

  if (col1.value && col2.value) {
    col1.value.style.transform = `translateY(${startOffset - (scroll * speed)}px)`
    col2.value.style.transform = `translateY(${-startOffset + (scroll * speed)}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="photo-section" ref="photoSection">
    <div class="gallery-mask">
      <div class="gallery-container">
        
        <div class="column col-left" ref="col1">
          <img v-for="(img, i) in imagesCol1" :key="i" :src="img" alt="Gallery 1">
        </div>

        <div class="column col-right" ref="col2">
          <img v-for="(img, i) in imagesCol2" :key="i" :src="img" alt="Gallery 2">
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

.photo-section {
  width: 100%;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}


.gallery-mask {
  width: 90%;
  max-width: 800px;
  height: 1000px;
  position: relative;
  overflow: hidden;
  
  /* degrade ( NUNCA MEXER ) */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
}

.gallery-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  height: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  will-change: transform;

  margin-top: -400px;
}

.col-left { padding-top: 100px; }
.col-right { padding-top: 0px; }

.column img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
</style>