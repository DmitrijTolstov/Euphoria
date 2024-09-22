<script setup>
import HeaderAuthorization from '@/components/HeaderAuthorization.vue';
import Authorization from '../components/Authorization.vue';
import ResetPassword from '../components/ResetPassword.vue';
import Verification from '../components/Verification.vue';
import CheckEmail from '../components/CheckEmail.vue';
import NewPassword from '../components/NewPassword.vue';

import { computed } from 'vue'

import { auth } from '../stores/auth';


const store = auth()

const layout = computed(() => {
    if (store.resetPass) {
        return ResetPassword
    } else if (store.checkedEmail) {
        return CheckEmail
    } else if (store.sign) {
        return Authorization
    } else if (store.newPass) {
        return NewPassword
    } else if (store.verif) {
        return Verification
    }

})

</script>
<template>
    <HeaderAuthorization />
    <div class="sign-container">
        <img :src="store.image" alt="">
        <component :is="layout"></component>
    </div>
</template>
<style scoped lang='scss'>
.sign-container {
    display: flex;
    gap: 80px;

    img {
        max-height: 839px;
        max-width: 610px;
    }
}
</style>