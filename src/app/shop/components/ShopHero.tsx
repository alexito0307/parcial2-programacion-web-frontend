export default function ShopHero() {
  return (
    <section className='bg-[#F5F2EC] flex flex-wrap w-full lg:justify-start justify-center items-center lg:px-50 lg:py-30 md:px-30 md:py-15 sm:py-15 p-5 sm:p-0 overflow-hidden relative lg:gap-20 md:gap-10'>
      <img src="images/shop/flowers-coffee.webp" alt="Flowers and Coffee" className='lg:w-1/4 md:w-1/2 w-3/4 rounded-t-[100px]'/>
      <h1 className='lg:text-5xl text-3xl mt-5 font-bold swipe-in-b'>Spring Bonanza</h1> 
      <img src="images/shop/floral-small.avif" alt="Floral Small" className="absolute top-0 left-0  lg:block md:block swipe-in-b"/>
      <img src="images/shop/floral-small.avif" alt="Floral Small" className="absolute   lg:block md:block hidden right-0 bottom-0 swipe-in-b"/>
    </section>
  )
}