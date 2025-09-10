import { ref } from 'vue'

export const useKeys = () => {
  const keys = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchKeys = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch('/api/keys')
      if (!response.ok) {
        throw new Error('Failed to fetch keys')
      }
      const data = await response.json()
      keys.value = data.keys
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    keys,
    error,
    loading,
    fetchKeys
  }
} 