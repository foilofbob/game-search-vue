import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const selectedGames = ref([])
  function addGame(game) {
    selectedGames.value.push(game)
  }
  function removeGame(idx) {
    selectedGames.value.splice(idx, 1)
  }
  function checkout() {
    selectedGames.value = []
  }
  return { selectedGames, addGame, removeGame, checkout }
})
