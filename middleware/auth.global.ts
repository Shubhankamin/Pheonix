import { defineNuxtRouteMiddleware, useCookie, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  const user = useCookie("user");

  // If user is not logged in and is NOT on the login page, redirect to login
  if (
    !user.value &&
    to.path.startsWith("/admin") &&
    to.path !== "/admin/login"
  ) {
    return navigateTo("/admin/login");
  }

  // If user is already logged in and tries to access login page, redirect to dashboard
  if (user.value && to.path === "/admin/login") {
    return navigateTo("/admin");
  }
});
