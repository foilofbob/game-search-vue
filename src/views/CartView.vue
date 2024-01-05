<template>
    <div v-if="currentSelection.length > 0">
        <h2 class="text-2xl">Your Cart</h2>

        <div v-for="(game) in currentSelection" :key="game.id" class="my-3 mx-0 p-2 border border-sky-300 min-h-24">
            <GameItem :game="game"/>
        </div>

        <button type="button" class="float-right bg-slate-100 hover:bg-white border-2 py-.5 px-2 rounded border-slate-400 font-semibold" @click="showModal">
            Checkout
        </button>

        <ModalPrompt v-show="isModalVisible" @close="closeModal">
            <template #header>
                <h2 class="text-2xl text-sky-400">Checking Out</h2>
            </template>
            <template #body>
                <span class="font-semibold">You have the following titles in your cart:</span>
                <ul class="list-decimal">
                    <li v-for="game in currentSelection" class="ml-5 pl-1">{{ game.name }}</li>
                </ul>
            </template>
            <template #footer-button>
                <button type="button" class="bg-slate-100 hover:bg-white border-2 py-.5 px-2 rounded border-sky-400 font-semibold" @click="confirmAndClose">
                    Continue
                </button>
            </template>
        </ModalPrompt>
    </div>
    <h2 v-else class="text-2xl">
        Your cart is empty!
    </h2>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from "@/stores/cart"
import GameItem from '../components/GameItem.vue'
import ModalPrompt from "../components/ModalPrompt.vue"
import { useRouter } from 'vue-router'

const store = useCartStore()
const currentSelection = computed(() => store.selectedGames)
const isModalVisible = ref(false)
const router = useRouter()

function showModal() {
    isModalVisible.value = true
}

function closeModal() {
    isModalVisible.value = false
}

function confirmAndClose() {
    store.checkout()
    router.push({ name: 'search' })
}
</script>
