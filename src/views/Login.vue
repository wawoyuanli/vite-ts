<template>
	<div class="h_login">
		<a-form
			:wrapper-col="{ span: wrapperCol.span, offset: wrapperCol.offset }"
			@finish="onFinish"
			:model="formInfo"
			@finishFailed="onFinishFailed"
		>
			<a-form-item :wrapper-col="{ span: wrapperCol.span, offset: wrapperCol.offset }">
				<label>用户名</label>
			</a-form-item>

			<a-form-item :rules="[{ required: true, message: 'Please input your username!' }]">
				<a-input v-model:value="formInfo.username" />
			</a-form-item>
			<a-form-item :wrapper-col="{ span: wrapperCol.span, offset: wrapperCol.offset }">
				<label>密码</label>
			</a-form-item>

			<a-form-item :rules="[{ required: true, message: 'Please input your password!' }]">
				<a-input v-model:value="formInfo.password" type="password" />
			</a-form-item>

			<a-form-item name="remember" :wrapper-col="{ span: wrapperCol.span, offset: wrapperCol.offset }">
				<a-checkbox v-model="remember">Remember me</a-checkbox>
			</a-form-item>

			<a-form-item :wrapper-col="{ span: wrapperCol.span, offset: wrapperCol.offset }">
				<a-button type="primary" html-type="submit">Submit</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router' //引用路由
//@ts-ignore
import { Send, getInfo } from '@/api/login.ts'
interface FormState {
	remember: boolean
	wrapperCol: {
		span: number
		offset: number
	}
	formInfo: {
		username: string
		password: string
	}
}
export default defineComponent({
	name: 'Login',
	setup() {
		const router = useRouter()
		const formState = reactive<FormState>({
			remember: true,
			wrapperCol: {
				span: 6,
				offset: 10,
			},
			formInfo: {
				username: '',
				password: ''
			}
		})
		const torefsData = toRefs(formState)
		const onFinish = () => {
			//对表单做验证
			router.push({
				path: '/home',
			})
		}
		const onFinishFailed = (errorInfo: any) => {
			console.log('Failed:', errorInfo)
		}
		onMounted(() => {
			let obj = {
				onlineProduct: "9597",
				succ: true,
				succNum: "309782",
				userCount: "321808",
			}
			getInfo(obj).then(res => {
				console.log(res, '00')
			}).catch(err => {
				console.log(err, '000')
			})
		})
		return {
			onFinish,
			onFinishFailed,
			...torefsData
		}
	},
})
</script>
<style scoped lang="scss">
.h_login {
	background-color: rgb(173, 184, 202);
	min-height: 100vh;
	color: $orange;
	.ant-form {
		padding-top: 10%;
	}
}
.ant-form-item {
	margin-bottom: 0px;
	color: #fff;
}
</style>