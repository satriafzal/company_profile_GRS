
<script setup>
import { ref, onUnmounted } from 'vue'

const loading = ref(false)
const cooldown = ref(0)
let cooldownTimer = null
const successMessage = ref('')
const errorMessage = ref('')

onUnmounted(() => {
  if (cooldownTimer) clearInterval(cooldownTimer)
})

const form = ref({
  fullName: '',
  companyName: '',
  workEmail: '',
  message: '',
  botcheck: false
})

const startCooldown = (seconds = 30) => {
  cooldown.value = seconds
  if (cooldownTimer) clearInterval(cooldownTimer)
  cooldownTimer = setInterval(() => {
    if (cooldown.value > 0) {
      cooldown.value--
    } else {
      clearInterval(cooldownTimer)
      cooldownTimer = null
    }
  }, 1000)
}

const submitForm = async () => {
  if (cooldown.value > 0) return

  // Honeypot check: jika botcheck dicentang/diisi (oleh bot), batalkan tanpa kirim ke API
  if (form.value.botcheck) {
    successMessage.value = 'Your inquiry has been sent successfully. Thank you for contacting us'
    return
  }

  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: '9d7ca3bd-406d-4c2a-8e09-981b6bc09cb7',
        subject: 'New Business Inquiry - Gemilang Raya Sejahtera',
        name: form.value.fullName,
        company: form.value.companyName,
        email: form.value.workEmail,
        message: form.value.message,
        botcheck: form.value.botcheck ? 'true' : ''
      })
    })

    const result = await response.json()

    if (response.ok && result.success) {
      successMessage.value = 'Your inquiry has been sent successfully. Thank you for contacting us'

      form.value = {
        fullName: '',
        companyName: '',
        workEmail: '',
        message: '',
        botcheck: false
      }

      startCooldown(30)
    } else {
      errorMessage.value = 'Failed to send your inquiry. Please try again!'
      console.error(result)
    }
  } catch (error) {
    errorMessage.value = 'Something went wrong. Please check your connection and try again!'
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact-section py-5">
    <div class="container py-5">
      <div class="row gx-lg-5">
        <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
          <h2 class="fw-bold mb-4">Mulai Kemitraan Bersama Kami</h2>

          <form @submit.prevent="submitForm">

            <div class="mb-4">
              <label for="fullName" class="form-label custom-label">FULL NAME</label>
              <input
                type="text"
                class="form-control custom-input"
                id="fullName"
                v-model="form.fullName"
                required
                maxlength="100"
              >
            </div>

            <div class="mb-4">
              <label for="companyName" class="form-label custom-label">COMPANY NAME</label>
              <input
                type="text"
                class="form-control custom-input"
                id="companyName"
                v-model="form.companyName"
                maxlength="150"
              >
            </div>

            <div class="mb-4">
              <label for="workEmail" class="form-label custom-label">WORK EMAIL</label>
              <input
                type="email"
                class="form-control custom-input"
                id="workEmail"
                v-model="form.workEmail"
                required
                maxlength="254"
              >
            </div>

            <div class="mb-4">
              <label for="message" class="form-label custom-label">MESSAGE / INQUIRY DETAILS</label>
              <textarea
                class="form-control custom-input"
                id="message"
                v-model="form.message"
                rows="4"
                required
                maxlength="3000"
              ></textarea>
            </div>

            <!-- Honeypot spam protection -->
            <input
              type="checkbox"
              name="botcheck"
              v-model="form.botcheck"
              tabindex="-1"
              autocomplete="off"
              style="display: none;"
            >

            <div v-if="successMessage" class="alert alert-success" role="status">
              {{ successMessage }}
            </div>

            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>

            <button
              type="submit"
              class="btn btn-dark w-100 custom-btn-submit py-3 mt-2"
              :disabled="loading || cooldown > 0"
            >
              {{ loading ? 'SENDING...' : cooldown > 0 ? `PLEASE WAIT (${cooldown}s)` : 'SEND INQUIRY' }}
            </button>
          </form>
        </div>

        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <div class="pt-lg-5 mt-lg-2">
            <div class="mb-4">
              <span class="custom-subtitle d-block mb-2">HEADQUARTERS</span>
              <h5 class="fw-bold mb-2">PT Gemilang Raya Sejahtera</h5>
              <p class="text-secondary mb-1">Jl. Jatirogo, Jepon, Gombang, Kec. Bogorejo</p>
              <p class="text-secondary mb-1">Kabupaten Blora, Jawa Tengah 58262</p>
            </div>

            <div class="mb-4">
              <span class="custom-subtitle d-block mb-2">GLOBAL LOGISTICS</span>
              <p class="text-secondary mb-1">Direct Inquiry: +62-232-5701-077</p>
              <p class="text-secondary">Email: Ptgemilangrayasejahtera@gmail.com</p>
            </div>

            <div class="map-wrapper mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5225092883024!2d111.48998909999999!3d-6.947521999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e776be22d3b9ab1%3A0x193570b25620cd89!2sPT.GEMILANG%20RAYA%20SEJAHTERA!5e0!3m2!1sid!2sid!4v1779003029083!5m2!1sid!2sid"
                width="100%"
                height="250"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="custom-map-iframe"
              ></iframe>
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
