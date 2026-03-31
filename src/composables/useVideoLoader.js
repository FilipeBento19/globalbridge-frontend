import { ref } from "vue"

export function useVideoLoader() {

  const videoSrc = ref(null)
  const loading = ref(true)

  const loadVideo = async (src) => {
    try {
      const res = await fetch(src)
      const blob = await res.blob()

      videoSrc.value = URL.createObjectURL(blob)
    } catch (err) {
      console.error("Erro carregando vídeo", err)
    } finally {
      loading.value = false
    }
  }

  return {
    videoSrc,
    loading,
    loadVideo
  }
}