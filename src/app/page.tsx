import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, Cable, CheckCircle, Heart, Leaf } from 'lucide-react'
import Link from 'next/link'



const Perks=[
  {
    name:"instant Delivery",
    Icon:ArrowDownToLine,
    Desc:"Get your assets deleiverd in seconds",
  },

  {
    name:"High Qulaity",
    Icon:CheckCircle,
    Desc:"Every asset on our platform is verfied by our Team , Not happy ? We offer 30-days return purshase",
  },
  {
    name:"For the Planet",
    Icon:Leaf,
    Desc:"We've pledged 1% of sales to the preservation and restoration of the nature of the planet",
  },
  {
    name:"Light-modern UI Design",
    Icon:Cable,
    Desc:"Different themes and styles for creating unique and profissnal look ",
  },
  {
    name:"We Support all Freelancers ",
    Icon:Heart,
    Desc:"Upload your work and bigger your chances for success",
  },
  {
    name:"Light-modern UI Design",
    Icon:Cable,
    Desc:"Different themes and styles for creating unique and profissnal look ",
  },



]


export default function Home() {
  return<>
  <MaxWidthWrapper>
  <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
      Your marketplace for high-quality{' '}
      <span className='text-purple-600'>
        digital assets
      </span>
      .
    </h1>
    <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
      Welcome to DigitalOscan. Every asset on our
      platform is verified by our team to ensure our
      highest quality standards.
    </p>
    <div className='flex flex-col sm:flex-row gap-4 mt-6 '>
    <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>Our quality promise   &rarr;</Button>
    </div>
  </div>

  {/* TODO LIST PRODACT */}
  <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {Perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center pb-3 md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.Desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>



</MaxWidthWrapper>
  </>
}
