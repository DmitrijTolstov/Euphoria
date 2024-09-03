<script setup>
import { ref, computed } from 'vue';


const props = defineProps({
    title: String,
    color: String,
    width: Number,
    border: Boolean,
    image: String,

})

const border = computed(() => {
    return props.border ? '' : 'none'
})

const buttonBg = computed(() => {
    if (props.color == 'white') {
        return true
    } else {
        return false
    }
})

const images = computed(() => {
    return `url(${props.image})`
})



</script>
<template>
    <button :class='{ "button_bg": buttonBg }' :style='{
        "color": props.color,
        "width": props.width + "px",
        "border": border,
        "background-image": images,
    }'>{{ title }}
    </button>
</template>
<style scoped lang='scss'>
button {
    padding-block: 12px;
    padding-inline: 48px;
    border-radius: 8px;
    background-position: center;
    background-position-x: 104px;
    background-repeat: no-repeat;
    border: 1px solid $gray ;
    color: $purple;
    font-weight: 500;
}

.button_bg {
    background-color: $purple;
}
</style>
