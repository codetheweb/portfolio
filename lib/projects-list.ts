import courseHeroLightImg from '/public/images/courses/promo-light.png';
import courseHeroDarkImg from '/public/images/courses/promo-dark.png';
import aoedeLogoImg from '/public/images/aoede/logo.png';
import xkcdyHeroImg from '/public/images/xkcdy/hero.png';
import linkhereLightImg from '/public/images/linkhere/promo-light.png';
import linkhereDarkImg from '/public/images/linkhere/promo-dark.png';
import museLogoImg from '/public/images/muse/logo.png';
import tuyapiLogoImg from '/public/images/tuyapi/logo.png';
import {ProjectTileProps} from '../components/project-tile';

export const PROJECTS_LIST: readonly ProjectTileProps[] = [
	{
		name: 'MTU Courses',
		year: '2021',
		description: 'Find courses. Plan your semester.',
		technologies: ['Next.js', 'NestJS', 'Kubernetes'],
		slug: '/projects/mtu-courses',
		image: {
			src: courseHeroLightImg,
			// Seems to be a bug with Next.js/Image where if `priority={true}`
			// is set it doesn't re-render when source changes?
			hasPriority: false,
			alt: 'Screenshot of MTU Courses',
			dark: {
				src: courseHeroDarkImg,
				hasPriority: false,
			},
		},
	},
	{
		image: {
			src: aoedeLogoImg,
			alt: 'Aoede logo',
			hasPriority: true,
		},
		name: 'Aoede',
		year: '2021',
		description: 'A self-hosted Discord music bot that directly streams from Spotify to Discord.',
		technologies: ['Rust'],
		slug: '/projects/aoede',
	},
	{
		video: '/videos/xkcdy/promo.mp4',
		isVideoRounded: true,
		isVideoShadowed: true,
		isImageAlignedWithBottom: true,
		image: {
			src: xkcdyHeroImg,
			alt: 'XKCDY hero image',
			hasPriority: true,
		},
		name: 'XKCDY',
		year: '2020',
		description: 'A modern, open source iOS client for XKCD.',
		technologies: ['Swift', 'SwiftUI', 'Typescript'],
		slug: '/projects/xkcdy',
	},
	{
		image: {
			src: linkhereLightImg,
			alt: 'screenshot of linkhere',
			dark: {
				src: linkhereDarkImg,
			},
		},
		name: 'linkhere',
		year: '2020',
		description: 'A simple web extension that unobtrusively shows websites saved from your mobile device in new tabs.',
		technologies: ['React', 'Typescript'],
		slug: '/projects/linkhere',
	},
	{
		image: {
			src: museLogoImg,
			alt: 'Muse logo',
		},
		name: 'Muse',
		year: '2020',
		description: 'A self-hosted midwestern Discord music bot that doesn\'t suck.',
		technologies: ['Typescript', 'Discord.js'],
		slug: '/projects/muse',
	},
	{
		video: '/videos/filmboard/promo.mp4',
		isVideoRounded: true,
		isVideoShadowed: true,
		name: 'Film Board',
		year: '2019',
		description: 'A modern & beautiful site for the Film Board at Michigan Tech.',
		technologies: ['React', 'JavaScript', 'Next.js'],
		slug: '/projects/film-board',
	},
	{
		image: {
			src: tuyapiLogoImg,
			alt: 'TuyAPI logo',
		},
		name: 'TuyAPI',
		year: '2017 → present',
		description: 'A collection of projects that enable local control of thousands of low-cost IoT devices.',
		technologies: ['Typescript', 'JavaScript'],
		slug: '/projects/tuyapi',
	},
];
