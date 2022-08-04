<template>
    <div>
        <h4>{{ myBlogList[$route.params.id].title }}</h4>
        <h5>{{ myBlogList[$route.params.id].content }}</h5>

        <router-link to="/list">리스트로 돌아가기</router-link>
    </div>
</template>
<script>
export default {
    name: "detail",
    data() {
        return {};
    },
    props: {
        myBlogList: Array,
    },
};
</script>
<style></style>
