<script setup>
import Button from './button.vue';
import Form from './form.vue';



const props = defineProps({
    title: String
})

</script>

<template>

    <div class="authorization">
        <img src="@/assets/images/authorization/signIn.png" alt="" class="authorization_img">
        <div class="container">
            <div class="authorization-content">
                <h2 class="authorization__title">{{ title }}</h2>
                <p class="authorization__text"></p>
                <div class="authorization-buttons">
                    <Button image='src/assets/images/socialLink/Google.svg' :title='"Continue With Google"'
                        :border='true' />
                    <Button image='src/assets/images/socialLink/twitter.svg' :title='"Continue With Twitter"'
                        :border='true' />
                </div>
                <div class="or">
                    OR
                </div>
                <Form />
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.authorization {
    display: flex;

    &_img {
        height: 853px;
    }

    &-content {
        margin-block-start: 60px;
        width: 568px;
    }

    &__title {
        font-size: $title;
    }

    &-buttons {
        font-size: 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-block-start: 50px;
    }


}

.or {
    margin-block: 50px;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 50%;
        height: 2px;
        background-color: rgba(102, 102, 102, 1);
        top: 50%;
        transform: translateY(-50%);
    }

    &::before {
        left: -24px;
    }

    &::after {
        right: -24px;
    }


}
</style>