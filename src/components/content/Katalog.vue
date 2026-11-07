<template>
  <section id="katalog" class="product-section py-5">
    <div class="container-fluid px-lg-5 py-5">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4"
        data-aos="fade-up"
      >
        <div>
          <h2 class="fw-bold display-6 mb-2">Katalog Produk</h2>
          <p class="text-secondary mb-0">Material murni, diolah untuk kinerja optimal.</p>
        </div>
        <div class="mt-3 mt-md-0">
          <span
            class="text-uppercase fw-bold"
            style="color: #a44a32; font-size: 0.85rem; letter-spacing: 1.5px"
          >
            Product Showcase
          </span>
        </div>
      </div>

      <div class="row g-3">
        <!-- Item 1: Raw Material -->
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
          <div class="product-card position-relative h-100 w-100">
            <img src="/image/raw.jpg" alt="Raw Material" class="product-img" loading="lazy" decoding="async" />
            <div class="card-overlay p-4">
              <h4 class="text-white fw-bold mb-2">Calsium Carbonate<br />Raw Material</h4>
              <p class="text-white-50 fst-italic fs-6">
                High-quality calcium carbonate sourced from selected natural minerals, providing reliable material for various industrial applications.
              </p>
            </div>
          </div>
        </div>

        <!-- Item 2: Coarse -->
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
          <div class="product-card position-relative h-100 w-100">
            <img src="/image/mask_group2.png" alt="Coarse" class="product-img" loading="lazy" decoding="async" />
            <div class="card-overlay p-4">
              <h4 class="text-white fw-bold mb-2">Calsium Carbonate<br />Coarse</h4>
              <p class="text-white-50 fst-italic fs-6">
                Coarse calcium carbonate with consistent quality, suitable for construction, manufacturing, and various industrial needs.
              </p>
            </div>
          </div>
        </div>

        <!-- Item 3: Powder -->
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
          <div class="product-card position-relative h-100 w-100">
            <img src="/image/calcium_powder.png" alt="Powder" class="product-img" loading="lazy" decoding="async" />
            <div class="card-overlay p-4">
              <h4 class="text-white fw-bold mb-2">Calsium Carbonate<br />Powder</h4>
              <p class="text-white-50 fst-italic fs-6">
                Fine calcium carbonate powder processed to deliver excellent quality and consistency for diverse industrial applications.
              </p>
            </div>
          </div>
        </div>

        <!-- Item 4: Consultation -->
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
          <div class="product-card position-relative h-100 w-100">
            <img src="/image/pasir_silika.png" alt="Consultation" class="product-img" loading="lazy" decoding="async" />
            <div class="card-overlay p-4">
              <h4 class="text-white fw-bold mb-2">Silica Sand</h4>
              <p class="text-white-50 fst-italic fs-6">
                Premium silica sand with carefully selected grains, ideal for industrial processing, filtration, and construction applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/style/Home.css';
</style>

