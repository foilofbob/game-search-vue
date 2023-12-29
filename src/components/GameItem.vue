<template>
    <img :src="game.image.icon_url"/>
    <div class="title-container">
        <span class="game-title">{{ game.name }}</span>
        <button class="toggle-game-button" @click="toggleSelectGame(game)">
            <span v-if="isSelected(game)">Remove from cart</span>
            <span v-else>Add to cart</span>
        </button>
    </div>
    <span class="game-desc">{{ game.deck }}</span>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from "@/stores/cart"

const props = defineProps({
    game: Object
});

const store = useCartStore()

function isSelected(game) {
    const currentSelection = computed(() => store.selectedGames)
    let found = currentSelection.value.find((obj) => {
        if (obj.id == game.id) {
            return true
        }
    })

    return found != null
}

function toggleSelectGame(game) {
    const currentSelection = computed(() => store.selectedGames)
    let found = currentSelection.value.find((obj, idx) => {
        if (obj.id == game.id) {
            store.removeGame(idx)
            return true
        }
    })

    if (found == null) {
        store.addGame(game)
    }
}
</script>