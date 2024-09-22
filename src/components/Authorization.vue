<script setup>
import Button from './button.vue';
import Form from './form.vue';

</script>

<template>

    <div class="authorization">
        <div class="authorization-content">
            <h2 class="authorization__title">Sign In Page</h2>
            <p class="authorization__text">{{ text }}</p>
            <div class="authorization-buttons">
                <Button class='authorization__btn authorization__btn_google'
                    image='src/assets/images/socialLink/Google.svg' :title='"Continue With Google"' />
                <Button class='authorization__btn authorization__btn_twitter'
                    image='src/assets/images/socialLink/twitter.svg' :title='"Continue With Twitter"' />
            </div>
            <div class="or">
                OR
            </div>
            <Form />
        </div>
    </div>

</template>

<style scoped lang='scss'>
.authorization {
    display: flex;

    &-content {
        margin-block-start: 60px;
        width: 568px;
    }

    &__title {
        font-size: $title;
        margin-block-end: 50px;
    }

    &__text {
        margin-block-start: 10px;
    }

    &-buttons {
        font-size: 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-block-start: 15px;

    }

    &__btn {
        @include button(true, false, false);

        &_twitter {
            background-image: url(@/assets/images/socialLink/twitter.svg);
        }

        &_google {
            background-image: url(@/assets/images/socialLink/Google.svg);
        }
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