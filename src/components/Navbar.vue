<template>
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm py-3 custom-bg-nav">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2" href="#home">
                <img src="/image/logo_grs_nav.png" alt="Logo PT Gemilang Raya Sejati" class="navbar-logo">
                <span class="fw-bold fs-5 text-uppercase text-dark">
                    PT Gemilang Raya Sejati
                </span>
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3 fw-medium">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#katalog">Katalog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#solution">Solution</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>

                <!-- <div class="ms-lg-4 mt-3 mt-lg-0">
                    <a href="#contact" class="btn btn-outline-light px-4 rounded-pill">Get Started</a>
                </div> -->
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const brandName = ref('PT Gemilang Raya Sejati');
</script>

<style scoped>
    @import '@/assets/style/Navbar.css';
</style>