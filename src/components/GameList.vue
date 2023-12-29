<template>
    <div v-for="(game) in games" :key="game.id" class="game-container">
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
.game-container {
    margin: 15px 0;
    padding: 10px;
    background-color: #f9f9ff;
    min-height: 100px;
    border: 1px solid #e0e0ff;

    img {
        margin-right: 10px;
        position: absolute;
    }

    .title-container {
        display: flex;
        justify-content: space-between;
        margin-left: 90px;
    }

    .game-title {
        font-size: 16px;
        font-weight: bold;
    }

    .toggle-game-button {
        
    }

    .game-desc {
        display: block;
        margin-left: 90px;
    }
}
</style>