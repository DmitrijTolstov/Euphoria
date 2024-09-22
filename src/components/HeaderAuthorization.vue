<script setup>
import Button from './button.vue';

import { auth } from '../stores/auth';

const store = auth()

const logIn = (() => {
    store.logIn()
})
const signUp = (() => {
    store.sighUp()
})


</script>

<template>
    <div class="container">
        <header class="header">
            <img src="@/assets/images/logo/logo.svg" alt="" class="header-logo">
            <div class="header-input">
                <label for="search">Search</label>
                <input class='header-search' type="text" id="search">
            </div>
            <div class="header-right">
                <select class='header-language' name="" id="">
                    <option value='Russian (Russian Federation)'>Russian (Russian Federation)</option>
                    <option value='English (united States)'>English (united States)</option>
                </select>
                <div class="header-buttons buttons">
                    <Button @click='logIn()' class='header-buttons_login' :title='"Login"' />
                    <Button @click='signUp()' class='header-buttons_sign' :title='"Sign Up"' />
                </div>
            </div>
        </header>
    </div>
    <div class="line"></div>
</template>

<style scoped lang='scss'>
.header {
    display: flex;
    justify-content: space-between;
    padding-block: 34px 31px;
    align-items: center;

    &-right {
        display: flex;
        gap: 60px;
    }

    &-buttons {
        display: flex;
        gap: 25px;

        &_login {
            @include button(true, false, false)
        }

        &_sign {
            @include button(true, false, false)
        }
    }

    &-search {
        padding-block: 12px;
        padding-inline: 12px;
        background-color: $light-gray;
        max-width: 184px;
        position: relative;
        background-image: url('@/assets/images/icons/search.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-position-x: 51px;
        border-radius: 8px;

    }

    &-input {
        position: relative;

        label {
            position: absolute;
            top: 50%;
            left: 80px;
            z-index: 10;
            transform: translateY(-50%);
            cursor: auto;
        }
    }
}

.line {
    @include line
}
</style>