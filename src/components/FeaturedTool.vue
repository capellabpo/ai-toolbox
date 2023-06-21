<!-- eslint-disable prettier/prettier -->
<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <h3 class="card-title">{{ card[0].title }}</h3>
                    <span class="badge badge-pill badge-dark">{{ card[0].category }}</span>
                </div>
                <div class="col" style="display: flex;
                flex-direction: column;
                align-items: flex-end;"
                >
                    <product-like-count></product-like-count>
                    <product-rating></product-rating>
                </div>
            </div>
        </div>
        <div class="card-body">
            <slot>
                <img src="../assets/imgs/placeholder.jpg" />
            </slot>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import ProductLikeCount from './ProductLikeCount.vue';
import ProductRating from './ProductRating.vue';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    components: {
        ProductLikeCount,
        ProductRating,
    },
    data() {
        return {
            card: [
                {
                    id: 1,
                    title: "Featured Card",
                    category: "Category",
                },
            ],
        };
    },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.card {
    height: 30vh;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    padding: 10px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ddd;
}

.card-title {
    margin: 0;
}

.card-body {
    padding: 10px;

    > img {
        width: 100%;
        height: 10vw;
        background-color: currentColor;
    }
}

.badge-dark {
    color: #fff;
    background-color: #343a40;
}

.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}

.badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
}
</style>
