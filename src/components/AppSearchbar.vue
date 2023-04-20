<script>
    import { store } from "../store";
    
    export default {
        name: "AppSearchbar",
        data() {
            return {
                store,
            };
        }
    }
</script>

<template>
    <section>
        <form @submit.prevent>
            <div class="d-flex mb-5">
                <input type="text"
                        class="form-control me-3"
                        placeholder="Cerca Film o Serie"
                />
            </div>
        </form>
    </section>
</template>

<style scoped lang="scss">

</style>