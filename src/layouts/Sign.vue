<script setup>
import HeaderAuthorization from '@/components/Authorization/HeaderAuthorization.vue';
import Authorization from '@/components/Authorization/Authorization.vue';
import ResetPassword from '@/components/Authorization/ResetPassword.vue';
import Verification from '@/components/Authorization/Verification.vue';
import CheckEmail from '@/components/Authorization/CheckEmail.vue';
import NewPassword from '@/components/Authorization/NewPassword.vue';

import { computed } from 'vue';
import auth from '../stores/auth';

const store = auth()

let components = {
    'newPass': NewPassword,
    'resetPass': ResetPassword,
    'checkEmail': CheckEmail,
    'verif': Verification,
    'signIn': Authorization,
    'signUp': Authorization,
}


let component = computed(() => {
    return components[store.componentLayout.component]
})

</script>
<template>
    <HeaderAuthorization />
    <div class="sign-container">
        <img :src="store.componentLayout.img" alt="">
        <component :is="component"></component>
    </div>
</template>
<style scoped lang='scss'>
.sign-container {
    display: flex;
    gap: 80px;

    img {
        max-height: 853px;
        max-width: 620px;
    }
}
</style>