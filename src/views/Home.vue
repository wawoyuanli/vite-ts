<template>
	<div> <a-button type="primary">Primary Button</a-button></div>
	<div>{{ count }}</div>
	<div>{{ book.year }}</div>
	 <div class="layout">
    <div class="aside">aside</div>
    <div class="main">main</div>
	<div class="ifc">
		<h1>1</h1>
	</div>
</div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, defineAsyncComponent } from 'vue'
interface Book {
	title: string
	author: string
	year: number
}
export default defineComponent({
	components: {
		HelloWorld: defineAsyncComponent(() => import('../components/HelloWorld.vue')),
	},
	setup() {
		defineAsyncComponent
		const count = ref<string | number>('11')
		const book = reactive<Book>({
			title: '',
			author: '',
			year: 2022,
		})
		return {
			count,
			book,
		}
	},
})
</script>
<style scoped>
.aside {
    float: left;
    width: 90%;
    background-color: rgb(189, 144, 181);
}
.main {
    overflow: auto;
	background-color: red;
}
.ifc{
	width: 100%;
	display: inline-block;
	text-align: center;
	vertical-align: middle;

}
</style>
