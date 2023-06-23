<!-- eslint-disable prettier/prettier -->
<!-- CardDetails.vue -->
<template>
    <div class="container-fluid bg-grey" id="header-section">
        <section>
            <div class="row">
                <div class="col-lg-8 offset-lg-2 section-contents">
                    <h1 class="mb-3">AI ToolBox</h1>
                    <p class="lead">Phasellus scelerisque elementum lorem, id hendrerit dolor dictum nec.</p>

                    <!-- Search Bar -->
                    <form>
                        <div class="input-group mb-3 header-search-bar">
                            <input type="text" class="form-control" placeholder="" />
                            <div class="input-group-append">
                                <button class="btn btn-light" type="button">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>

    <!-- AI Tools filter and cards -->
    <div class="container-fluid mt-5">
        <div class="row">
            <!-- Left Column -->
            <div class="col-md-3" id="checkbox-filters-container">
                <!-- Expandable Checkbox Filters -->
                <!-- Bootstrap card -->
                <div class="card mb-4">
                    <!-- Card header with toggle button -->
                    <div class="card-header" @click="toggleCardSortBy">
                        <h5 class="mb-0">Sort By</h5>
                    </div>

                    <!-- Card body (content) with Vue conditional rendering -->
                    <div class="card-body" v-if="isExpandedSortBy">
                        <!-- Placeholder for checkbox filters -->
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Newest to Oldest
                            </label>
                        </div>
                        <hr style="margin: 10px 1rem; opacity: .050;" />
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Top Rated
                            </label>
                        </div>
                        <hr style="margin: 10px 1rem; opacity: .050;" />
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Most Favourites
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Bootstrap card -->
                <div class="card mb-4">
                    <!-- Card header with toggle button -->
                    <div class="card-header" @click="toggleCardPricing">
                        <h5 class="mb-0">Pricing</h5>
                    </div>

                    <!-- Card body (content) with Vue conditional rendering -->
                    <div class="card-body" v-if="isExpandedPricing">
                        <!-- Placeholder for checkbox filters -->
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Free
                            </label>
                        </div>
                        <hr style="margin: 10px 1rem; opacity: .050;" />
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Trial
                            </label>
                        </div>
                        <hr style="margin: 10px 1rem; opacity: .050;" />
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" /> Paid
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Bootstrap card -->
                <div class="card mb-4">
                    <!-- Card header with toggle button -->
                    <div class="card-header" @click="toggleCardCategory">
                        <h5 class="mb-0">Categories</h5>
                    </div>

                    <!-- Card body (content) with Vue conditional rendering -->
                    <div class="card-body" v-if="isExpandedCategory">
                        <!-- Placeholder for checkbox filters -->
                        <div class="category-container" v-for="category in categories" :key="category.ai_use_case_id">
                            <div class="form-group">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="selectedCategories" :value="category.ai_use_case_id"
                                        @change="filterData" />
                                    {{ category.ai_use_case_category }}
                                </label>
                            </div>
                            <hr style="margin: 10px 1rem; opacity: .050;" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="col-md-9 ai-tool-details-container">
                <div class="row">
                    <h2 class="mb-5">About {{ tool_name }}</h2>
                    <!-- Right Column Cards -->
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col">
                                    <h3 class="card-title">{{ tool_name }}</h3>
                                    <span class="badge badge-pill badge-dark" v-for="columnData in getColumnDataArray()"
                                        :key="columnData">
                                        {{ columnData }}
                                    </span>
                                </div>
                                <div class="col" style="display: flex;
                                flex-direction: column;
                                align-items: flex-end;">
                                    <product-like-count></product-like-count>
                                    <div class="date">
                                        <i class="fa-regular fa-calendar"></i>&nbsp;<span>MM/DD/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <slot>
                                <img src="../assets/imgs/placeholder.jpg" />
                            </slot>
                        </div>
                    </div>
                </div>

                <!-- Right Column Lower Container -->
                <div class="container-fluid row lower-container-details mt-5">
                    <!-- Left column -->
                    <div class="col-md-9">
                        <section>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit faucibus suscipit.
                            <br><br>Key Features:
                            <br>
                            <ul>
                                <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    Etiam ut quam sed sapien ullamcorper viverra non vel magna.</li>
                                <li>Nullam elementum justo augue. Fusce posuere, neque porta congue hendrerit, lacus massa
                                    accumsan augue, id luctus velit quam non arcu. Duis sit amet purus non urna feugiat
                                    tincidunt eget sit amet ipsum.</li>
                                <li>Cras aliquet vulputate urna eu tristique. Nullam in interdum tellus. Curabitur
                                    vestibulum dignissim nisl, rhoncus mollis ante tempor vitae.</li>
                                <li>Suspendisse ac nisi pharetra, congue neque vitae, blandit lectus. Interdum et malesuada
                                    fames ac ante ipsum primis in faucibus. Nullam cursus lacus at turpis ultricies
                                    elementum.</li>
                                <li>Mauris ut luctus ante. Vestibulum dignissim dui nulla, non interdum quam mattis vitae.
                                    Nulla fermentum dapibus lorem a mattis. Fusce nec augue viverra mi condimentum mattis.
                                    In a erat rutrum sapien pretium volutpat.</li>
                            </ul>
                            <br>
                            Social Media: <span><i class="fa-brands fa-square-facebook fa-xl"></i></span><span><i
                                    class="fa-brands fa-square-instagram fa-xl"></i></span><span><i
                                    class="fa-brands fa-square-twitter fa-xl"></i></span>
                        </section>

                        <form action="" class="container-fluid submit-review-container">
                            <div class="form-header">
                                <div class="title">
                                    <label for="">
                                        <h4>Would you recommend Lorem Ipsum?</h4>
                                    </label>
                                    <small id="passwordHelpInline" class="text-muted">
                                        Share your experience with the community.
                                    </small>
                                </div>
                                <product-rating></product-rating>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="action-btns">
                                <button type="button" class="btn btn-light">Cancel</button>
                                <button type="button" class="btn btn-primary">Post</button>
                            </div>
                        </form>

                        <div class="tool-reviews">
                            <div class="container review-container">
                                <div class="container header-review">
                                    <label for="">User 1</label><span><small class="text-muted">MM/DD/YYYY</small></span>
                                    <product-rating></product-rating>
                                </div>
                                <div class="review">
                                    <small id="passwordHelpInline" class="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit faucibus
                                        suscipit.
                                    </small>
                                </div>
                            </div>
                            <hr style="margin: auto; opacity: .1;" />
                            <div class="container review-container">
                                <div class="container header-review">
                                    <label for="">User 2</label><span><small class="text-muted">MM/DD/YYYY</small></span>
                                    <product-rating></product-rating>
                                </div>
                                <div class="review">
                                    <small id="passwordHelpInline" class="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit faucibus
                                        suscipit.
                                    </small>
                                </div>
                            </div>
                            <hr style="margin: auto; opacity: .1;" />
                            <div class="container review-container">
                                <div class="container header-review">
                                    <label for="">User 3</label><span><small class="text-muted">MM/DD/YYYY</small></span>
                                    <product-rating></product-rating>
                                </div>
                                <div class="review">
                                    <small id="passwordHelpInline" class="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit faucibus
                                        suscipit.
                                    </small>
                                </div>
                            </div>
                            <hr style="margin: auto; opacity: .1;" />
                            <button type="button" class="btn btn-light btn-lg">View All Reviews</button>
                        </div>
                    </div>
                    <!-- Right column -->
                    <div class="col-md-3">
                        <div class="container-fluid rating-container">
                            <div class="rating-details">
                                <h5>Overall Rating</h5>
                                <div class="rating-number">5</div>
                                <product-rating></product-rating>
                                <small>Based on 1 review</small>
                            </div>

                            <div class="progress-container">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100"
                                        aria-valuemin="0" aria-valuemax="100">
                                        5 star
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="0"></div>
                                    <!-- <span>5 star</span> -->
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="0"></div>
                                    <!-- <span>5 star</span> -->
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="0"></div>
                                    <!-- <span>5 star</span> -->
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="0"></div>
                                    <!-- <span>5 star</span> -->
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid card trending-tools-ol">
                            <div class="card-body">
                                <h5 class="card-title">Trending Tools</h5>
                                <ol>
                                    <li class="trending-item">Tool #1</li>
                                    <li class="trending-item">Tool #2</li>
                                    <li class="trending-item">Tool #3</li>
                                    <li class="trending-item">Tool #4</li>
                                    <li class="trending-item">Tool #5</li>
                                    <li class="trending-item">Tool #6</li>
                                    <li class="trending-item">Tool #7</li>
                                    <li class="trending-item">Tool #8</li>
                                    <li class="trending-item">Tool #9</li>
                                    <li class="trending-item">Tool #10</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="related-tools-container">
        <h4>Related Tools</h4>
        <trending-tools class="related-tools"></trending-tools>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import axios from 'axios';
import TrendingTools from "./TrendingTools.vue";
import ProductLikeCount from "./ProductLikeCount.vue";
import ProductRating from "./ProductRating.vue";

export default {
    name: "ToolDetails",
    components: {
        TrendingTools,
        ProductLikeCount,
        ProductRating,
    },
    data() {
        return {
            categories: [],
            categoryBadge: [],
            columnDataArray: [],
            isExpandedSortBy: false,
            isExpandedPricing: false,
            isExpandedCategory: false,
            tool_name: null,
            tool_description: null,
            tool_url: null,
            card: null,
        };
    },
    mounted() {
        this.fetchCategories();
        // Fetch card details based on the ID from the API or another data source
        let cardId = this.$route.params.tool_id;
        this.card = this.getCardDetails(cardId);
    },
    methods: {
        getCardDetails(cardId) {
            const apiUrl = `http://localhost:3000/ai_tools/tool/${cardId}`;
            axios.get(apiUrl)
                .then(response => {
                    const responseData = response.data;
                    this.card = responseData[0];
                    const values = this.card;
                    this.categoryBadge = values.use_case_id;
                    // console.log(this.card, values.use_case_id);
                    this.tool_name = responseData[0].tool_name;
                    this.tool_description = responseData[0].tool_description;
                    this.tool_url = responseData[0].tool_url;
                })
                .catch(error => {
                    console.error('Error fetching card details:', error);
                });
        },
        goBack() {
            this.$router.go(-1);
        },
        fetchCategories() {
            axios
                .get("http://localhost:3000/ai_use_case") // Replace with your server URL
                .then((response) => {
                    this.categories = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching use case", error);
                });
        },
        toggleCardSortBy() {
            this.isExpandedSortBy = !this.isExpandedSortBy;
        },
        toggleCardPricing() {
            this.isExpandedPricing = !this.isExpandedPricing;
        },
        toggleCardCategory() {
            this.isExpandedCategory = !this.isExpandedCategory;
        },
        getCategoryName(categoryId) {
            return this.categories[categoryId];
        },
        getColumnDataArray() {
            const proxyArray = this.categories;
            const standardArray = Array.from(proxyArray).map(proxy => Object.assign({}, proxy));
            return this.columnDataArray = this.categoryBadge.map(number => {
                const matchedItem = standardArray.find(item => item.ai_use_case_id === number);
                console.log(matchedItem);
                return matchedItem ? matchedItem.ai_use_case_category : null;
            });
        }
    },
    // computed: {
    //     transformedArray() {
    //         const proxyArray = this.categories;
    //         const standardArray = Array.from(proxyArray).map(proxy => Object.assign({}, proxy));
    //         return this.columnDataArray = this.categoryBadge.map(number => {
    //             const matchedItem = standardArray.find(item => item.ai_use_case_id === number);
    //             console.log(matchedItem);
    //             return matchedItem ? matchedItem.ai_use_case_name : null;
    //         });
    //     }
    // }
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
#header-section {
    padding: 4rem auto 4rem auto;

    .row {
        padding: 6rem;
    }

    .section-contents {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;

        >form {
            width: -webkit-fill-available;
        }
    }

    .header-search-bar {
        .form-control {
            z-index: 0;
            padding: 12px;
            border-radius: 8px;
            background-color: transparent;
            border-color: transparent;
            color: inherit;
            border: 1px solid #adb5bd;
        }

        .btn {
            position: absolute;
            z-index: 1;
            top: 6px;
            width: 175px;
            right: 8px;
            border-radius: 8px;
        }
    }
}

.bg-grey {
    background-color: #D9D9D9;
}

#checkbox-filters-container {
    margin-top: 86px;
}

.ai-tool-details-container {
    .card {
        padding: 0px;
        width: 95%;
        height: 60vh;

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
            padding: 6px 12px;
            margin: 5px;
        }

        .badge-pill {
            padding-right: 0.6em;
            padding-left: 0.6em;
            border-radius: 5px;
        }
    }

    .card-body img {
        width: -webkit-fill-available;
        height: 48vh;
    }

    .lower-container-details {

        .submit-review-container {
            margin: 5rem 0px;
            background-color: #D0D5DD;
            padding: 25px;
            width: 96%;
            border-radius: 10px;

            .form-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: row;

                .title {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }

            .form-control {
                margin: 12px 0px;
            }

            .action-btns {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;

                .btn {
                    margin-right: 15px;
                }
            }
        }

        .tool-reviews {
            width: 80%;
            margin: auto;

            .review-container {
                margin-top: 1rem;

                .review {
                    margin: 2rem 1rem;
                }
            }

            .btn {
                margin: 4rem 38% 4rem 38%;
            }
        }

        .rating-container {
            margin-bottom: 4rem;

            .rating-details {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 2rem;

                .rating-number {
                    font-size: 80px;
                }

            }

            .progress-container {

                >* {
                    margin: 10px 0px;
                }
            }
        }

        .trending-tools-ol {
            height: auto;

            .card-title {
                margin-bottom: 1rem;
            }

            .trending-item {
                margin-bottom: 10px;
            }

        }
    }
}

.related-tools-container {
    >h4 {
        margin-left: 10px;
    }

    .related-tools {
        margin: 0px 0px 4rem 0px;
    }
}</style>
