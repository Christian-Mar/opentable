"use client"

import "./globals.css";
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {
  
  return (
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap">
         <RestaurantCard />
        </div>
      </main>)
}
