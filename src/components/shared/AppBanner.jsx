"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import developer from '../../../assets/images/developer-animation.svg';
import Button from '../reusable/Button';

const AppBanner = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row"
			//style={{ height: '80vh' }}
		>
			<div className="w-full md:w-3/3 flex justify-center">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
				>
					Welcome to the Blockfolio
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-12 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-blue-200"
				>
					
				</motion.p>
				{/*
				<a href='/projects'>
					<div
						className="mt-16 text-md font-general-medium text-center bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-3 py-2.5 duration-300"
						aria-label="Download Resume"
						style={{ width: '155px' }}
					>
						<Button title="Explore" />
					</div>
				</a>
				*/}
			</div>
			{/*
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<Image
					className='img'
					style={{ width: '100%' }}
					src={
						developer
					}
					alt="Developer"
				/>
			</motion.div>
		*/}
		</motion.section>
	);
};

export default AppBanner;
