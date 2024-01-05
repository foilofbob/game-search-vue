<template>
    <img :src="game.image.icon_url" class="absolute mr-3"/>
    <div class="flex flex-row justify-between ml-24">
        <span class="text-lg font-semibold max-w-md">{{ game.name }}</span>
        <button class="bg-slate-100 hover:bg-white border-2 py-.5 px-2 rounded border-slate-400 font-semibold mx-2 h-7" @click="toggleSelectGame(game)">
            <span v-if="isSelected(game)" class="font-semibold">Remove from cart</span>
            <span v-else class="font-semibold">Add to cart</span>
        </button>
    </div>
    <span class="block ml-24">{{ game.deck }}</span>
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