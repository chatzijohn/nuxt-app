<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-row items-center max-w-dvw p-2 h-16 ">
    <div class="flex flex-row w-full min-h-full items-center">
      <h1 class="text-lg font-bold text-slate-900">Panagiotis Chatzigiannis</h1>
    </div>
    <div class="flex items-center justify-center min-h-full w-full">
      <menu class="justify-between gap-4 items-center hidden md:inline-flex text-lg">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </menu>
    </div>
    <div class="flex gap-1 w-full items-center justify-end">
      <button class="bg-transparent hover:text-white hover:bg-black transition-all duration-200 rounded-md h-12 w-12">
        <Icon name="material-symbols:dark-mode" class="h-8 w-9" />
      </button>
      <button
        class="md:hidden bg-transparent hover:text-white hover:bg-black transition-all duration-200 rounded-md h-12 w-12">
        <Icon name="material-symbols:menu" class="h-8 w-9" />
      </button>
    </div>
  </div>
</template>
