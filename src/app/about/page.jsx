import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import AboutCertifications from '../../components/about/AboutCertifications';
import certification from '../../certification';

const About = async () => {
	return (
		<div>
			<AboutMeBio />
			<AboutCounter />
			<AboutCertifications certification={certification} />
		</div>
	);
};

export default About;
