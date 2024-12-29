"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

import profileImage from '../../../assets/images/pfp.png';

const AboutMeBio = () => {
	const aboutMe = [
		{
			id: 1,
			bio: "Welcome to the blockfolio! My name is J. Valeska, and here.. should write something.. more..",
		},
		{
			id: 2,
			bio: "This is just a placeholder..",
		},
		{
			id: 3,
			bio: "",
		},
		{
			id: 4,
			bio: "Thank you for visiting the blockfolio. See you in the blocks.",
		},
	];


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			exit={{ opacity: 0 }}
			className="container mx-auto"
		>
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
					<Image src={profileImage} className="rounded-lg w-96" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={bio.id}
						>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default AboutMeBio;
