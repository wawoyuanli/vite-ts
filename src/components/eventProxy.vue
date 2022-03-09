
<script  lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        let count = ref<Number>(1)
        return {
            count
        }
    }
})

</script>
<template>
    <div>{{ count }}</div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
