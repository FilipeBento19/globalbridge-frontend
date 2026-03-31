import { ref, onMounted, onUnmounted, computed } from "vue"

export function useScrollAnimation(endScroll = 600) {
  const scrollY = ref(0)
  const updateScroll = () => { scrollY.value = window.scrollY }

  onMounted(() => window.addEventListener("scroll", updateScroll))
  onUnmounted(() => window.removeEventListener("scroll", updateScroll))

  const videoStyle = computed(() => {
    const p = Math.min(Math.max(scrollY.value / endScroll, 0), 1)
    return {
      transform: `scale(${1 - p * 0.25})`,
      borderRadius: `${p * 90}px`,
      width: `${100 - p * 15}%`,
      transition: 'transform 0.2s ease-out'
    }
  })

  return { videoStyle }
}