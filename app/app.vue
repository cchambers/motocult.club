<script setup lang="ts">
const redirectUrl = 'https://horizonclubscene.com/clubs/hcs-moto-cult/join'

useHead({
  meta: [
    { 'http-equiv': 'refresh', content: `2;url=${redirectUrl}` },
  ],
})

onMounted(() => {
  setTimeout(() => {
    window.location.href = redirectUrl
  }, 2000)
})
</script>

<template>
  <div class="splash">
    <img
      src="/motocult.png"
      alt="Moto Cult"
      class="logo"
      width="480"
      height="480"
    >
  </div>
</template>

<style>
html,
body,
#__nuxt {
  margin: 0;
  height: 100%;
}

.splash {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #000;
}

.logo {
  width: min(90vw, 480px);
  height: auto;
  animation: flash 2s ease-in-out forwards;
}

@keyframes flash {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }

  20% {
    opacity: 1;
    transform: scale(1);
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
