<template>
 <div class="layout">
    <div class="aside">aside</div>
    <div class="main">main</div>
</div>
<div class="float-margin">
    <div class="float">float</div>
    <div class="margin">margin</div>

</div>
</template>
<style scoped lang="scss">
.aside {
    float: left;
    width: 400px;
    background-color: rgb(189, 144, 181);
}
.main {
    overflow: auto;
    background-color: green;
}
.float{
    float: left;
    width: 200px;
    background-color: antiquewhite;
}
.margin{
    margin-left: 200px;
    background: red;
}
</style>