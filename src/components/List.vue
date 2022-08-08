<template>
    <div class="wrapper">
        <div
            class="blog-detail"
            v-for="(blog, i) in myBlogList"
            :key="blog"
            @click="$router.push(`/detail/${i}`)"
        >
            <h4>
                {{ blog.title }}
            </h4>
            <p>{{ blog.content }}</p>
            <p>{{ blog.date }}</p>
        </div>
        <!-- 
        <div class="blog-detail">
            <h4 @click="$router.push('/detail/0')">
                {{ myBlogList[0].title }}
            </h4>
            <p>{{ myBlogList[0].content }}</p>
            <p>{{ myBlogList[0].date }}</p>
        </div>

        <div class="blog-detail">
            <h4>{{ myBlogList[1].title }}</h4>
            <p>{{ myBlogList[1].content }}</p>
            <p>{{ myBlogList[1].date }}</p>
            <router-link :to="{ path: 'detail/' + myBlogList[1].number }"
                >디테일 페이지로</router-link
            >
        </div>

        <div class="blog-detail">
            <h4>{{ myBlogList[2].title }}</h4>
            <p>{{ myBlogList[2].content }}</p>
            <p>{{ myBlogList[2].date }}</p>
            <router-link :to="{ path: 'detail/' + myBlogList[2].number }"
                >디테일 페이지로</router-link
            >
        </div> -->

        <!-- <div class="blog-detail">
            <h4>{{ myBlogList[0].title }}</h4>
            <p>{{ myBlogList[0].content }}</p>
            <p>{{ myBlogList[0].date }}</p>
            <router-link :to="{ path: 'detail/' + myBlogList[0].number }"
                >디테일 페이지로</router-link
            >
        </div>

        <div class="blog-detail">
            <h4>{{ myBlogList[1].title }}</h4>
            <p>{{ myBlogList[1].content }}</p>
            <p>{{ myBlogList[1].date }}</p>
            <router-link :to="{ path: 'detail/' + myBlogList[1].number }"
                >디테일 페이지로</router-link
            >
        </div>

        <div class="blog-detail">
            <h4>{{ myBlogList[2].title }}</h4>
            <p>{{ myBlogList[2].content }}</p>
            <p>{{ myBlogList[2].date }}</p>
            <router-link :to="{ path: 'detail/' + myBlogList[2].number }"
                >디테일 페이지로</router-link
            >
        </div> -->
    </div>
</template>
<script>
export default {
    name: "List",

    props: {
        myBlogList: Array,
    },

    data() {
        return {};
    },
    mounted() {
        console.log(this.myBlogList);
    },
};
</script>

<style>
.blog-detail {
    height: 200px;
    width: 700px;
    margin: 10px;
    background-color: rgb(223, 168, 186);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
