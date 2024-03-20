import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from '@/shared/HText'
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 } // delay for each child node (2nd node comes 0.2 secodns after first)
    }
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Sate of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam, fugiat possimus officiis, nihil alias mollitia aperiam dolor nobis iure numquam nostrum. Pariatur quam voluptates voluptas nam et. Tempore, voluptates."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Hundreds of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam, fugiat possimus officiis, nihil alias mollitia aperiam dolor nobis iure numquam nostrum. Pariatur quam voluptates voluptas nam et. Tempore, voluptates."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro trainers",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam, fugiat possimus officiis, nihil alias mollitia aperiam dolor nobis iure numquam nostrum. Pariatur quam voluptates voluptas nam et. Tempore, voluptates."
    }
]

const Benefits = ( {setSelectedPage} : Props) => {
    return(
        <section 
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <div className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p>
                        We provide world class fitness equipment, trainers and classes. 
                        We provide care into each and every member.
                    </p>
                </div>
           
            {/* Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {
                    benefits.map((benefit, id) =>(
                        <Benefit 
                            key={id}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))
                }
            </motion.div>
            
            {/* Graphic and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-image"
                    src={BenefitsPageGraphic}
                />

                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, nesciunt. Itaque molestiae error esse obcaecati beatae. Temporibus atque obcaecati ab quaerat itaque repudiandae nisi error accusantium. Voluptatibus quod vel nemo?"</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod veritatis magni ipsum error iste voluptatibus aliquid totam, placeat corrupti et commodi debitis laboriosam. Totam corporis officiis sequi laudantium maiores.</p>
                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            
            </motion.div>
        </section>
    )
}

export default Benefits