import React from 'react';
import dayjs from 'dayjs';
import {Resvg} from '@resvg/resvg-js';
import satori from 'satori';
import axios from 'axios';
import {NextApiHandler} from 'next';
import {getPublicOrigin} from '../../lib/get-public-origin';

const arial = axios<ArrayBuffer>(new URL('/fonts/arial.ttf', getPublicOrigin()).toString(), {responseType: 'arraybuffer'});
const arialBold = axios<ArrayBuffer>(new URL('/fonts/arial_bold.ttf', getPublicOrigin()).toString(), {responseType: 'arraybuffer'});

const handler: NextApiHandler = async (request, response) => {
	const {title, tags, publishedAt} = request.query;
	const parsedTags = Array.isArray(tags) ? tags : [tags];

	const formattedPublishedAt = dayjs(publishedAt as string).format('MMMM D, YYYY');

	const [{data: arialData}, {data: arialBoldData}] = await Promise.all([arial, arialBold]);

	const svg = await satori(
		(
			<div style={{display: 'flex', backgroundColor: 'white', width: '100%', height: '100%', flexDirection: 'column', padding: '4rem',
				fontWeight: 'bold'}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<img src={new URL('/images/favicon/android-chrome-192x192.png', getPublicOrigin()).toString()} width={64} height={64}/>
					<span
						style={{
							marginLeft: 12,
							fontSize: 26,
						}}
					>
						maxisom.me
					</span>
				</div>

				<div style={{marginTop: 'auto', marginBottom: 'auto', fontSize: 48, maxWidth: '80%', background: '#7A81FF', color: 'white', textAlign: 'center', alignSelf: 'center', padding: '2.5rem'}}>
					{title}
				</div>

				<div style={{display: 'flex'}}>
					<div style={{display: 'flex', marginTop: 'auto', fontSize: 26}}>
						{parsedTags.map(tag => (
							<div key={tag} style={{display: 'flex', marginRight: '1rem'}}><span style={{color: 'gray', marginRight: '2ch'}}>#</span>{tag}</div>
						))}
					</div>

					<div style={{marginLeft: 'auto', fontSize: 26}}>
						{formattedPublishedAt}
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Arial',
					data: arialData,
					style: 'normal',
					weight: 400,
				},
				{
					name: 'Arial',
					data: arialBoldData,
					weight: 700,
				},
			],
		},
	);

	const resvg = new Resvg(svg, {});
	const pngBuffer = resvg.render().asPng();

	response.setHeader('Content-Type', 'image/png');
	response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
	response.end(pngBuffer);
};

export default handler;
