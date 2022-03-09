
<script  lang="ts">
import { defineComponent ,ref,reactive} from 'vue'
export default defineComponent({
  setup() {
    const count = ref<Number>(10)
    interface People{
      name:string,
      age:number
    }
    const obj=reactive<People>({
      name:'huyuanli',
      age:19
    })
    return {
      count,
      obj
    }
  }
})
</script>
<template>
  <div>
    {{count}}
    <div>{{obj.name}}</div>
    <div>{{obj.age}}</div>
  </div>
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
