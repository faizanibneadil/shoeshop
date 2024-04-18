export const mobileNavigation = [
    { path: "/", name: "Home", isAdmin: false },
    { path: "/categories", name: "Categories", isAdmin: false },
    { path: "/orders", name: "Orders", isAdmin: false },
    { path: "/dashboard", name: "Dashboard", isAdmin: false },
    { path: "/dashboard", name: "Dashboard", isAdmin: true },
    { path: "/inventory", name: "Inventory", isAdmin: true },
    { path: "/deliveries", name: "Deliveries", isAdmin: true },
    { path: "/deliveries", name: "Settings", isAdmin: true },
    { path: "/deliveries", name: "Analytics", isAdmin: true },
]

export const adminMobileNavigation = mobileNavigation.filter(nav => nav.isAdmin)