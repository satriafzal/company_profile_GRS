<script setup>
import About from '@/components/content/About.vue';
import Katalog from '@/components/content/Katalog.vue';
import Solution from '@/components/content/Solution.vue';
import Video from '@/components/content/Video.vue';
import Contact from '@/components/content/Contact.vue';
</script>

<template>
  <div class="home-wrapper">
    <!-- home section -->
    <section id="home" class="hero-section d-flex align-items-center" data-aos-delay="500">
      <div class="container">
        <div class="row">
          <!-- Kolom Teks (Kiri) -->
          <div class="col-lg-6" data-aos="fade-up">
            <h1 class="hero-title fw-bold text-uppercase mt-5">
              Presisi Mineral <br>
              Untuk Solusi <br>
              Industri Yang <br>
              Unggul
            </h1>
            <p class="hero-subtitle mt-4 text-secondary">
              Kami menghadirkan kalsium karbonat berkualitas tinggi dengan standar kemurnian global untuk mendukung
              rantai pasok manufaktur modern.
            </p>
            <div class="mt-4 d-flex gap-3">
              <a href="#katalog" class="btn btn-primary-custom px-4 py-2 rounded-1 fw-medium">
                Jelajahi Produk
              </a>
              <a href="#about" class="btn btn-outline-dark px-4 py-2 rounded-1 fw-medium">
                Tentang Kami
              </a>
            </div>
          </div>

          <!-- Kolom Foto Perusahaan (Kanan) -->
          <div class="col-lg-6 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div class="hero-image-wrapper mt-4 mt-lg-5">
              <img
                src="/image/hero.jpg"
                alt="Foto Perusahaan PT Gemilang Raya Sejahtera"
                class="img-fluid rounded hero-company-img"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <About />
    <Katalog />
    <Solution />
    <Video />
    <Contact />
  </div>
</template>

<style scoped>
@import '@/assets/style/Home.css';
</style>
