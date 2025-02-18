import { defineNuxtRouteMiddleware, useCookie, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  const user = useCookie("user");

  if (!user.value && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});
