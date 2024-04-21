import { createSafeActionClient } from "next-safe-action";
export const action = createSafeActionClient();
export const authorizedClientAction = createSafeActionClient({
    middleware: () => { }
})
export const authorizedAdminAction = createSafeActionClient({
    middleware: () => { }
})