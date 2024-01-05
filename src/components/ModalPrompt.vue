<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal w-1/4 bg-white flex flex-col divide-y divide-solid">
        <header class="relative p-4">
          <slot name="header">
            This is the default title!
          </slot>
          <button type="button" class="text-slate-300 absolute top-0 right-2 text-base" @click="close">
            x
          </button>
        </header>

        <section class="p-4">
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <footer class="flex justify-between p-3">
          <button type="button" class="text-slate-400 hover:text-sky-400 py-.5 px-2 font-semibold" @click="close">
            Cancel
          </button>
          <slot name="footer-button">
            This is the default footer!
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'ModalPrompt',
    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>