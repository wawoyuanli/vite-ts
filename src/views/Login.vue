<template>
	<div class="h_login">
		<a-form
			:model="formState"
			:wrapper-col="{ span: formState.wrapperCol.span, offset: formState.wrapperCol.offset }"
			@finish="onFinish"
			@finishFailed="onFinishFailed"
		>
			<a-form-item
				:wrapper-col="{ span: formState.wrapperCol.span, offset: formState.wrapperCol.offset }"
			>
				<label>用户名</label>
			</a-form-item>

			<a-form-item :rules="[{ required: true, message: 'Please input your username!' }]">
				<a-input v-model:value="formState.username" />
			</a-form-item>
			<a-form-item
				:wrapper-col="{ span: formState.wrapperCol.span, offset: formState.wrapperCol.offset }"
			>
				<label>密码</label>
			</a-form-item>

			<a-form-item :rules="[{ required: true, message: 'Please input your password!' }]">
				<a-input v-model:value="formState.password" type="password" />
			</a-form-item>

			<a-form-item
				name="remember"
				:wrapper-col="{ span: formState.wrapperCol.span, offset: formState.wrapperCol.offset }"
			>
				<a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
			</a-form-item>

			<a-form-item
				:wrapper-col="{ span: formState.wrapperCol.span, offset: formState.wrapperCol.offset }"
			>
				<a-button type="primary" html-type="submit">Submit</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>
<script lang='ts'>
import { defineComponent, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router' //引用路由
//@ts-ignore
import { Send } from '@/api/login.ts'
interface FormState {
	username: string
	password: string
	remember: boolean
	wrapperCol: {
		span: number
		offset: number
	}
}
export default defineComponent({
	name: 'Login',
	setup() {
		const router = useRouter()
		const formState = reactive<FormState>({
			username: '',
			password: '',
			remember: true,
			wrapperCol: {
				span: 6,
				offset: 10,
			},
		})
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
			Send({ email: '1583649818@qq.com' }).then(res => {
				console.log(res,'00')
			}).catch(err => {
				console.log(err,'000')
			})
		})
		return {
			formState,
			onFinish,
			onFinishFailed,
		}
	},
})
</script>
<style scoped lang="scss">
.h_login {
	background-color: rgb(17, 49, 99);
	min-height: 100vh;
	color: #fff;
	.ant-form {
		padding-top: 10%;
	}
}
.ant-form-item {
	margin-bottom: 0px;
	color: #fff;
}
</style>