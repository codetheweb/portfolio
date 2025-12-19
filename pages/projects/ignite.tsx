import React from 'react';
import {NextSeo} from 'next-seo';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import EmbeddedImg from '../../components/embedded-img';
import Footer from '../../components/projects/footer';
import TextLink from '../../components/text-link';
import commonStyles from './styles/common.module.scss';
import demoJpg from '../../public/images/ignite/demo.jpg';

export default function Ignite() {
	return (
		<>
			<NextSeo title="Ignite | Max Isom"/>

			<div className={commonStyles.largerContainer}>
				<div className={commonStyles.textSection}>
					<Header size="h1">Ignite</Header>

					<Links year="2024 → present" github="https://github.com/codetheweb/ignite"/>

					<EmbeddedImg hasPriority size="medium" src={demoJpg} alt="Photo of an Ignite-created ebook on a Kindle Paperwhite"/>

					<p>
						I use an Amazon Kindle. Kindles do not support the standard, open source ePub format—they use proprietary & undocumented formats (<code>.azw3</code>, <code>.mobi</code>), so you have to convert ePub files before you can read them on a Kindle.
					</p>

					<p>
						I read a lot of <TextLink href="https://en.wikipedia.org/wiki/Web_fiction">web serials</TextLink>, which means I'm often converting the same book a few times a month as new chapters come out.
					</p>

					<p>
						The only way (besides of Amazon's cloud tool) to convert ePub files to Kindle-supported formats is Calibre. However, Calibre tends to be quite slow. Converting an ePub of <TextLink href="https://wanderinginn.com/">The Wandering Inn</TextLink> created by <TextLink href="https://github.com/kemayo/leech">leech</TextLink> takes over <b>40 minutes</b>.
					</p>
					<p>
						Although Calibre open source the codebase is very hard to contribute to. I also noticed that many people wanted to embed a converter in their applications, but unfortunately Calibre is difficult to embed due to requiring a Python interpreter and its focus on being a GUI application rather than a library.
					</p>

					<p>
						I decided to try writing a from-scratch reader and writer for KF8/.azw3. I chose Rust because it's easy to embed and has a great ecosystem for binary serialization/deserialization.
					</p>

					<p>
						The first step was implementing the custom compression format used by Kindle formats (a flavor of LZ77). <TextLink href="https://github.com/codetheweb/palmdoc-compression">My implementation</TextLink> is <b>300-400x</b> faster than Calibre's.
					</p>

					<p>
						The next step was deserialization (if I have a deserializer, it's easier to test a serializer). Parsing was tedious but not too difficult.
					</p>

					<p>
						Writing the serializer is much more frusterating because there's no way to test created files besides loading them on a Kindle. If they're invalid, the Kindle will often freeze or crash. A created file that Calibre considers valid and parsable may still be invalid on a Kindle.
					</p>

					<p>
						As of 01/25, I have a basic serializer that can convert a single chapter. I'm still working on getting it to work with an entire ePub. :)
					</p>
				</div>

				<Footer/>
			</div>
		</>
	);
}
