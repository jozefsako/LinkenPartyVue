<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/homeReveler">
                LinkenParty
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li>
                    <router-link to="/" slot="title"  class="nav-link" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Past</span>
                    </router-link></li><li>
                    <router-link to="/register" slot="title" class="nav-link"  role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Future</span>
                    </router-link></li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li>
                    <router-link to="/"   rel="noopener"
                    class="btn btn-neutral btn-icon" role="button">
                    <span class="btn-inner--icon">
                        <i class="fa fa-sign-out mr-2"></i>
                    </span>
                    <span class="nav-link-inner--text">Log out</span>
                    </router-link>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  }
};
</script>
<style>
</style>
