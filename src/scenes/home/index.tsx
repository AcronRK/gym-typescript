import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section
            id="home"
            className='gap-16 bg-gray-20 py-10 md:h-ful md:pb-0'
        >
            {/* image and header  */}
            <motion.div 
                className='md:flex mx-auto w-5/6 items-center justify-center'
                onViewportEnter={() => {
                    setSelectedPage(SelectedPage.Home)
                }}
            >
                {/* Main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* Headings */}
                    <motion.div 
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 1}}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0}

                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                                <img alt='home-page-text' src={HomePageText}/>
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>
                            Unrivaled Gym. Unparalleled Training Fitess Classes. 
                            World Class studios to ge The Body Shapes that you dream of...
                            Get Your Dream Body Now.
                        </p>
                    </motion.div>
                    {/* Actions */}
                    <motion.div 
                        className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.3, duration: 1}}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0}

                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image */}
                <div 
                    className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md-justify-items-end'

                >
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </motion.div>
            {/* sponsors */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between'>
                            <img src={SponsorRedBull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home