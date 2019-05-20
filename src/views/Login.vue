<template>
    <section class="section section-shaped section-lg my-0 my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                          <template>
                            <div class="text-muted text-center mb-3">
                                <h1 class="display-2 mb-0">Log in</h1>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            type="text"
                                            placeholder="Username"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <router-link to="/homeReveler">
                                        <base-button type="primary" class="my-4">Sign In</base-button>
                                    </router-link>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-12 text-center">
                            <router-link to="/register" class="text-light">
                                <small>Create new account</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
