import { Clock2Icon, TagIcon } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

function Hero() {
    return (
        <section className="w-full min-h-[calc(100vh-172px)] bg-[url('/images/homepage/HeroImage.webp')] bg-cover bg-no-repeat flex items-end justify-center">
            <div className="bg-white w-[95%] sm:w-[90%] max-w-8xl px-3 mx-auto md:mx-16 lg:mx-44 rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl py-5 sm:py-6 md:py-8 xl:py-10 text-text-color text-center font-jost flex flex-col items-center gap-3 sm:gap-5 md:gap-6">

                <Link href={'/en/singlepage'} className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-semibold leading-tight cursor-pointer hover:underline">
                    Trump Lands in Qatar After Meeting Militant Who Now Leads Syria
                </Link>

                <p className="text-lg md:text-base lg:text-xl leading-relaxed max-w-6xl line-clamp-2">
                    President Trump&apos;s meeting with President Ahmed al-Shara came after he said he would lift U.S. sanctions on Syria. Mr. Trump&apos;s Gulf tour has mostly sidestepped the war in Gaza.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-6 xl:gap-16 text-xs sm:text-sm md:text-lg font-normal">
                    <p className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                            <AvatarImage src="/images/kasinHomepage/author.jpg" alt="Sudhir Nepal" />
                            <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                        Sudhir Nepal
                    </p>
                    <p className="flex items-center gap-2">
                        <Clock2Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        6 minutes read
                    </p>
                    <p className="flex items-center gap-2">
                        <TagIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        Politics
                    </p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-gray-700 md:text-[16px] text-[10px]'>Updated 5:01 AM EDT, Thu May 15, 2025</p>
                </div>
            </div>
        </section>
    )
}

export default Hero