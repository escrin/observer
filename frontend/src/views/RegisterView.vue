<script setup lang="ts">
import { computed, ref } from 'vue';

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useRegistry } from '../stores/registry';

const registry = useRegistry();

enum State {
  Unknown,
  Filling,
  Submitting,
  Error,
  Success,
}

const url = ref<string>('');
const state = ref(State.Filling);
const message = ref<string>();

const urlIsHostname = computed(() =>
  /^([a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?$/i.test(url.value),
);

async function register(event: Event): Promise<void> {
  message.value = '';
  if (!url.value) return;
  try {
    state.value = State.Submitting;
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.checkValidity()) return;
    await registry.registerNode(url.value);
    state.value = State.Success;
    message.value = `${url} registered successfully!`;
    url.value = '';
  } catch (e: any) {
    message.value = e.message ?? e.toString();
  } finally {
    state.value = State.Filling;
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex flex-col items-center grow">
      <form class="h-full mt-[15%] mx-auto" @submit.prevent="register">
        <label class="my-4 block" for="register-node-input">
          Enter the hostname of your SSSS or Runner:
        </label>
        <div class="flex my-4">
          <input
            id="register-node-input"
            type="text"
            v-model="url"
            placeholder="ssss.example.com"
            class="p-3 text-xl bg-dark block rounded-md w-[60vw]"
            :disabled="state !== State.Filling"
          />
          <button class="button" :disabled="!urlIsHostname || state === State.Submitting">
            Register
          </button>
        </div>
        <p
          v-if="state === State.Error || state === State.Success"
          :class="`${state === State.Error ? 'text-accent' : 'text-primary'}`"
        >
          {{ message }}
        </p>
      </form>
    </main>
  </div>
  <Footer />
</template>
