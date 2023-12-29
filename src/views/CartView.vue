<template>
    <div v-if="currentSelection.length > 0" >
        <h2>Your Cart</h2>

        <div v-for="(game) in currentSelection" :key="game.id" class="game-container">
            <GameItem :game="game"/>
        </div>

        <button type="button" class="checkout-button" @click="showModal">
            Checkout
        </button>

        <ModalPrompt v-show="isModalVisible" @close="closeModal">
            <template #header>
                <span>Checking Out</span>
            </template>
            <template #body>
                <span>You have the following titles in your cart:</span>
                <ul>
                    <li v-for="game in currentSelection">{{ game.name }}</li>
                </ul>
            </template>
            <template #footer>
                <button type="button" class="btn-green" @click="confirmAndClose">
                    Continue
                </button>
            </template>
        </ModalPrompt>
    </div>
    <h2 v-else class="empty-cart">
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

<style>
.empty-cart {

}
.checkout-button {

}
</style>