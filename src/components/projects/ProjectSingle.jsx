'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const animation = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const ProjectSingle = ({ id, title, category, image }) => {
  return (
    <motion.div initial="hidden" whileInView="show" variants={animation}>
      <Link href={`/projects/${id}`}>
        <div className="rounded-xl shadow-lg h-full hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={`/project_${id}.png`}
              width="600"
              height="200"
              priority={true}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
