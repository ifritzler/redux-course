import { createSlice } from "@reduxjs/toolkit"
// Un slice es una porcion del estado global de mi aplicación en redux.

// Estado inicial de mi slice.
const initialState = {
  count: 0
}

// Aqui creamos el slice y este recibe un nombre, un initialState y sus reductores
// los cuales son funciones que trabajan directamente con el estado, pero por detras 
// usa una libreria llamada immer para mantener la inmutabilidad del state.
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // Cada reducer puede recibir 2 parametros. state y action (este ultimo contiene la propiedad payload)
    // la cual necesitaremos si queremos extraer un valor del exterior. El mismo es opcional.
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

// Extraemos los action creators que createSlice crea por nosotros desde la propiedad actions del slice.
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

// Exportamos por defecto el reducer que crea "under the hood" nuestro createSlice.
export default counterSlice.reducer

export const selectCounterValue = (state) => state.counter.count;