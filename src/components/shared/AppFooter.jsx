import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiFacebook,
} from 'react-icons/fi';

const socialLinks = [
	{
		id: 0,
		icon: <FiGithub />,
		url: 'https://github.com/jvaleskadevs',
	},
	{
		id: 1,
		icon: <FiTwitter />,
		url: 'https://warpcast.com/jvaleska.eth',
	}
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
					<p className="text-md sm:text-lg text-primary-dark dark:text-primary-light my-16">
						Made with 💜️ by J. Valeska for all the Blockmates
					</p>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
