import { createContext, useState, useEffect } from "react";
export const coinMarketContext= createContext();

export const CoinMarketProvider=({children})=>{

 const getTopTenCoins= async()=>{
     try {
         const res = await fetch('/api/getTopten')
         const data = await res.json()
         return data.data.data
         
     } catch (error) {
         console.log(error.message)
         
     }
 }
 return(
     <coinMarketContext.Provider
     value={{
         
         getTopTenCoins,
         
         }}>
         {children}
     </coinMarketContext.Provider>
 )   
}