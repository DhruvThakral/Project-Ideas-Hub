import { cn } from '@/lib/utils'
import { Boxes, Search } from 'lucide-react'
import React from 'react'
import SearchForm from '@/components/SearchForm';
import ThreeDCardDemo from '@/components/ThreeDCard';

const page = () => {
  return (
    <>
    <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes/>
    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Tailwind is Awesome
    </h1>
    <p className="text-center mt-2 text-neutral-300 relative z-20">
      Framer motion is the best animation library ngl
    </p>

      <SearchForm/>
  </div>

    <section className='section-container'>
      <p className='text-30-semibold'>
        Trendy Projects
      </p>
      <ul className='mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-1 justify-center'>
    
        {/* [
          {'id':123, 'title':'A NEW PROJECT' },

        ].map((item,i) => (
          <ThreeDCardDemo/>
        )) */}

<ThreeDCardDemo/>
      </ul>
    </section>
  </>
  )
}

export default page
