import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'



let store=(
    (set, get) => ({
    products: [{ title:"React", description: "Nextjs" },
    { title: "Nodejs", description: "Express" },

   ],

    addToCart: (product) => 
        set((state) => ({
            products: [
            {title:product.title,description: product.description},...state.products
            ]}),
            {
              name: "answer-storage", 
              getStorage: () => sessionStorage, 
            }),
    removeProduct: (title) =>
        set((state) => ({
            products: state.products.filter((product) => product.title !== title),
        })),             
}))
store = persist(store, {name: "basket"})

export const useCartStore = create(store);