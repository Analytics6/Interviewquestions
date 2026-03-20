import { create } from 'zustand'

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item: CartItem) => {
    const currentItems = get().items
    const existingItem = currentItems.find(i => i.id === item.id)
    
    if (existingItem) {
      set({
        items: currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      })
    } else {
      set({ items: [...currentItems, item] })
    }
  },

  removeItem: (id: number) => {
    set({ items: get().items.filter(i => i.id !== id) })
  },

  updateQuantity: (id: number, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(id)
    } else {
      set({
        items: get().items.map(i =>
          i.id === id ? { ...i, quantity } : i
        ),
      })
    }
  },

  clearCart: () => {
    set({ items: [] })
  },

  getTotal: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
}))
