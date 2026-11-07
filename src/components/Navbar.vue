<template>
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm py-3 custom-bg-nav">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2" href="/#home" @click="closeNavbar">
                <img src="/image/logo_grs_nav.png" alt="Logo PT Gemilang Raya Sejati" class="navbar-logo">
                <span class="fw-bold fs-5 text-uppercase text-dark">
                    PT Gemilang Raya Sejahtera
                </span>
            </a>

            <button class="navbar-toggler border-0 shadow-none" type="button" @click="toggleNavbar"
                :aria-expanded="isNavOpen" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3 fw-medium">
                    <li class="nav-item">
                        <a class="nav-link" href="/#home" @click="closeNavbar">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#about" @click="closeNavbar">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#katalog" @click="closeNavbar">Katalog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#solution" @click="closeNavbar">Solution</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#contact" @click="closeNavbar">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Collapse } from 'bootstrap';

const isNavOpen = ref(false);
let collapseInstance = null;

onMounted(() => {
    const el = document.getElementById('navbarNav');
    if (el) {
        collapseInstance = Collapse.getOrCreateInstance(el, { toggle: false });
        el.addEventListener('shown.bs.collapse', () => {
            isNavOpen.value = true;
        });
        el.addEventListener('hidden.bs.collapse', () => {
            isNavOpen.value = false;
        });
    }

    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

const toggleNavbar = () => {
    if (!collapseInstance) {
        const el = document.getElementById('navbarNav');
        if (el) collapseInstance = Collapse.getOrCreateInstance(el, { toggle: false });
    }
    if (collapseInstance) {
        collapseInstance.toggle();
    }
};

const closeNavbar = () => {
    if (collapseInstance) {
        collapseInstance.hide();
    }
};

const handleClickOutside = (event) => {
    const nav = document.querySelector('.navbar');
    if (isNavOpen.value && nav && !nav.contains(event.target)) {
        closeNavbar();
    }
};
</script>

<style scoped>
    @import '@/assets/style/Navbar.css';
</style>