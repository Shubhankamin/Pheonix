import { defineNuxtRouteMiddleware, navigateTo, useState } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState("user");
  if (!user.value && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});
