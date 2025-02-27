import { SelectedPage, ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image1
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image2
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image3
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image4
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image5
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est qui eius, minus eum velit! Adipisci dicta fugiat facere non sunt animi rem officiis, illum, nulla, cum nemo corrupti odio?",
    image: image6
  }
]

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourClasses" className='w-fill bg-primary-100 py-40'>
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className='mx-auto w-5/6'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.3, duration: 1}}
        variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0}

        }}
      >
        <div className='md:w-3/5'>
          <HText>OUR CLASSES</HText>
          <p className='py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae deleniti voluptate assumenda quo sed commodi aliquam aliquid culpa praesentium, quidem officia quasi veniam a amet porro at blanditiis!
          </p>
        </div>
      </motion.div>
      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
          {classes.map((item, id) =>(
            <Class 
              key={id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>

    </section>
  )
}

export default OurClasses