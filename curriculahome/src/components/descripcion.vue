<template>
    <div class ="descStyle">
        {{mensaje}}
    </div>
</template>

<script>
export default {
    name: 'descripcion',

    props: ['mensaje']
}
</script>

<style scoped>
    .descStyle{
        border: 10px solid black;
        width : 53vw;
        height : 35vh;
        padding: 50px;
        align-content: stretch;
    }
</style>