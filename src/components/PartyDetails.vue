<template>
    <div class="profile-page">
        <my-header></my-header>
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <GoogleMap ref='GoogleMap'></GoogleMap>
                        </div>
                        <div class="text-center mt-5">
                        {{this.$route.params}}
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue"
import header from "../layout/AppHeaderReveler.vue"
import footer from "../layout/AppFooter.vue"

export default {
    components:{
        'GoogleMap': GoogleMap,
        'my-header': header,
        'my-footer': footer
    },
    created: function(){
        console.log(this.$route.params);
    }
}

</script>