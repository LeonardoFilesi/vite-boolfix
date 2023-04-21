<script>
import {store} from "../store";

export default {
    name: "AppHeader",
    emits: ["search"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-fluid ms_flex ms_bg-black">
        <div class="ms_flex"><h1 class="ms_white">Bool</h1><h1 class="ms_red">Flix</h1></div>
        <div class="ms_flex">
            <input type="text"
                        class="form-control me-3"
                        placeholder="Cerca Film o Serie"
                        v-model="store.searchKey"
                />
            <button @click="$emit('search')" class="btn btn-outline-success" type="submit">Cerca</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.ms_white {
    color: white;
}
.ms_red {
    color: red;
}
.ms_bg-black {
    background-color: black;
}
</style>