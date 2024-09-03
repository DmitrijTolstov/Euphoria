<script setup>

import { computed, ref } from 'vue'
import Button from './button.vue';



const props = defineProps({
    signIn: Boolean
})


const sign = computed(() => {
    return props.signIn
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
        <div class="form-password_link" :class='{ " signIn": props.signIn, "signUp": !props.signIn }'>
            <span>{{ props.signIn ? `Use 8 or more characters with a mix of letters, numbers &
                symbols ` : 'Forget your password?' }}</span>
        </div>
        <div class="form-checkbox" v-if="props.signIn">
            <div class="form-checkbox-container">
                <input type="checkbox" name="" id="agree">
                <label for="agree">Agree to our Terms of use and Privacy Policy </label>
            </div>
            <div class="form-checkbox-container">
                <input type="checkbox" name="" id="Subscribe">
                <label for="Subscribe">Subscribe to our monthly newsletter</label>
            </div>
        </div>
        <Button :title='props.signIn ? "Sign In" : "Sign Up"' :color='"white"' />
    </form>
    <div class="link-account" v-if="props.signIn">
        Don’t have an account? <a href="">Sign up</a>
    </div>
    <div class="link-account" v-else>
        Sign up Already have an account? <a href="">Log in</a>
    </div>
</template>

<style scoped lang='scss'>
.form {


    &-container {
        display: flex;
        flex-direction: column;
        position: relative;

        &:not(:last-child) {
            margin-block-start: 33px;
        }

        input {
            width: 100%;
            border: 1px solid $gray;
            border-radius: 8px;
            padding-inline: 8px;
            padding-block: 8px;
            margin-block-start: 10px;
            margin-block-end: 4px;
        }

        label {
            color: $gray;
            display: inline;
        }

    }

    &-checkbox {
        margin-block: 30px 58px;

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
        text-decoration: underline;
        text-underline-position: under;
        color: $gray;
    }
}

.signIn {
    text-align: left;
}

.signUp {
    text-align: right;
}

.error {
    color: rgba(238, 29, 82, 1);
    display: none;
}
</style>