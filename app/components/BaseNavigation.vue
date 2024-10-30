<script lang="ts" setup>
const menu = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];
type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <div class="flex flex-row items-center p-2 h-16">
    <div class="flex flex-row w-full min-h-full items-center gap-2">
      <NuxtLink to="/">
        <h1 class="text-lg font-bold text-primary ">
          Panagiotis Chatzigiannis
        </h1>
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center justify-center min-h-full w-full">
      <nav>
        <ul class="justify-between gap-4 items-center hidden md:inline-flex text-lg">
          <li v-for="item in menu" :key="item.name">
            <NuxtLink :to="item.path">
              <button class="button">{{ item.name }}</button>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex gap-1 w-full items-center justify-end">
      <NuxtLink to="https://github.com/chatzijohn">
        <button class="icon-button">
          <Icon name="uil:github" class="icon w-8 h-8" />
        </button>
      </NuxtLink>
      <NuxtLink to="https://linkedin.com/in/chatzijohn">
        <button class="icon-button">
          <Icon name="uil:linkedin" class="icon w-8 h-8" />
        </button>
      </NuxtLink>
      <button class="icon-button" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
        <Icon v-if="$colorMode.preference == 'light'" name="material-symbols:dark-mode" class="icon w-6 h-6" />
        <Icon v-else name="material-symbols:light-mode" class="icon w-6 h-6" />
      </button>

      <button class="icon-button md:hidden">
        <Icon name="material-symbols:menu" class="icon w-8 h-8" />
      </button>
    </div>
  </div>
</template>
