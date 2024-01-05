<template>
    <div v-for="(game) in games" :key="game.id" class="my-3 mx-0 p-2 border border-sky-300 min-h-24">
        <GameItem :game="game"></GameItem>
    </div>
</template>

<script>
import GameItem from './GameItem.vue'

export default {
    props: {
        games: Array
    },
    components: {
        GameItem
    }
}
</script>

<style>

.title-container {
    display: flex;
    justify-content: space-between;
    margin-left: 90px;
}

.game-title {
    font-size: 16px;
    font-weight: bold;
}

.game-desc {
    display: block;
    margin-left: 90px;
}

.game-container img {
    margin-right: 10px;
    position: absolute;
}
</style>