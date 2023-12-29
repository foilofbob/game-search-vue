<template>
    <div class="search-header">
        <input type="text" name="search-input" placeholder="Search for a game..." v-model="gameName"/>
        <button @click="search">Search</button>
    </div>
    <div v-if="isLoading" class="loading-container">
        <span class="loading">Loading...</span>
    </div>
    <div v-else-if="searchResults.length" class="search-results">
        <div class="pagination">
            <span>Showing {{ offset + 1 }} - {{ offset + searchResults.length }} of {{ totalResults }}</span>
            <button v-if="offset > 0" class="next-button" @click="previousPage">Previous</button>
            <button v-if="searchResults.length + offset < totalResults" class="previous-button" @click="nextPage">Next</button>
        </div>
        
        <GameList :games="searchResults"></GameList>
    </div>
    <div v-else>
        <span class="no-results">No results found</span>
    </div>
</template>

<script>
import axios from "axios"
import jsonAdapter from "axios-jsonp"
import GameList from "../components/GameList.vue"

export default {
    data() {
        return {
            gameName: "",
            isLoading: true,
            offset: 0,
            searchResults: [],
            totalResults: 0
        }
    },
    methods: {
        queryGiantBomb: function() {
            var endpoint = 'https://www.giantbomb.com/api/'

            var data = {
                api_key: '6b03c8c79bd2223ec85732688b9e2653aeb6e922',
                format: 'jsonp',
                field_list: 'name,image,deck,id',
                limit: 50
            }

            if (this.gameName.trim().length > 0) {
                endpoint += 'search/?'
                data.query = this.gameName.trim()
				data.resources = 'game'
                data.page = this.offset/50 + 1
            } else {
                endpoint += 'games/?'
                data.offset = this.offset
            }

            this.isLoading = true

            axios
            .get(endpoint + new URLSearchParams(data), {
                dataType: 'jsonp',
                adapter: jsonAdapter,
                callbackParamName: 'json_callback'
            })
            .then(response => 
            {
                this.isLoading = false
                this.searchResults = response.data.results
                this.totalResults = response.data.number_of_total_results
                console.log(response.data)
            })
        },
        nextPage: function() {
            this.offset = this.offset + 50
            this.queryGiantBomb()
        },
        previousPage: function() {
            this.offset = this.offset - 50
            this.queryGiantBomb()
        },
        search: function() {
            this.offset = 0
            this.queryGiantBomb()
        }
    },
    mounted() {
        this.queryGiantBomb()
    },
    components: {
        GameList
    }
}
</script>

<style scoped>
.search-header {
    display: flex;
    margin: 0 auto 30px;
    width: fit-content;
}
input[name="search-input"] {
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 10px;
    border-color: #38b3e7;
}
.pagination {
    margin-bottom: 20px;
}
</style>