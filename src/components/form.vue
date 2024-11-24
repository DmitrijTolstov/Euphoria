<script setup>

import { computed } from 'vue'
import Button from './button.vue';
import { auth } from '../stores/auth';

const store = auth()



const sign = computed(() => {
    return store.sign
        ? [{ 'email': 'User name or email address', 'password': 'Password' }]
        : [{ 'email': 'Email Address', 'password': 'Password' }]
})


</script>


<template>
    <form action="" class='form'>

        <div class="form-email form-container" v-for="({ email }, index) in sign" :key="index">
            <label for="email">{{ email }}</label>
            <input id='email' type="email">
            <p class="error">Error Message</p>
        </div>
        <div class="form-password form-container" v-for="({ password }, index) in sign" :key="index">
            <div class="hide">
                <img src="@/assets/images/icons/hide.svg" alt="">
                hide
            </div>
            <label for="password">{{ password }}</label>
            <input id='password' type="email">
            <p class="error">error password</p>
        </div>

        <div class="form-password_link" :class='{ " store.sign": !store.login, "signUp": store.login }'>
            <span v-if='store.login' @click='store.showComponents("resetPass")'>Forget your password?</span>
            <span v-else> Use 8 or more characters with a mix of letters, numbers &
                symbols</span>
        </div>
        <Router-link to='/shop'>
            <Button v-if="store.login" class='form_btn' :title='"Sign In"' />
        </Router-link>

        <template v-if='!store.login'>
            <div class="form-checkbox">
                <div class="form-checkbox-container">
                    <input type="checkbox" name="" id="agree">
                    <label for="agree">Agree to our Terms of use and Privacy Policy </label>
                </div>
                <div class="form-checkbox-container">
                    <input type="checkbox" name="" id="Subscribe">
                    <label for="Subscribe">Subscribe to our monthly newsletter</label>
                </div>

            </div>
            <Button class=' form_btn' :title='"Sign Up"' />

        </template>
    </form>
    <div class="link-account" v-if="store.login">
        Don’t have an account? <a @click='store.showComponents("signUp"), store.login = false'> Sign up </a>
    </div>
    <div div class="link-account" v-else>
        Sign up Already have an account ? <a @click=' store.showComponents("signIn"), store.login = true'>Log in</a>
    </div>
</template>

<style lang='scss'>
.form {


    &-container {
        display: flex;
        flex-direction: column;
        position: relative;

        &:not(:last-child) {
            margin-block-start: 20px;
        }


        label {
            color: $gray;
            display: inline;
        }

    }

    &-checkbox {
        margin-block: 30px 50px;

        &-container {
            display: flex;
            align-items: center;
            gap: 10px;

            &:not(:last-child) {
                margin-block-end: 16px;
            }

            input {
                accent-color: $gray;
            }
        }
    }

    &-password_link {

        margin-block-end: 30px;

        span {
            cursor: pointer;
        }
    }

    &-newPassword {
        margin-block-start: 20px;
    }

    &_btn {
        @include button(false, true, white)
    }

}

.hide {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    place-items: center;
    gap: 12px;
    cursor: pointer;
}

.link-account {
    margin-block-start: 10px;

    a {
        @include link
    }
}

.store.sign {
    text-align: left;
}

.signUp {
    text-align: right;
}

.error {
    color: rgba(238, 29, 82, 1);
    opacity: 0;
    cursor: default;
}
</style>