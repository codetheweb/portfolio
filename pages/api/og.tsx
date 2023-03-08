import React from 'react';
import dayjs from 'dayjs';
import {ImageResponse} from '@vercel/og';

export const config = {
	runtime: 'edge',
};

const arial = fetch(new URL('../../public/fonts/arial.ttf', import.meta.url)).then(async response => response.arrayBuffer());
const arialBold = fetch(new URL('../../public/fonts/arial_bold.ttf', import.meta.url)).then(async response => response.arrayBuffer());

const handler = async (request: Request) => {
	const url = new URL(request.url);
	const title = url.searchParams.get('title');
	const tags = url.searchParams.getAll('tags');
	const publishedAt = url.searchParams.get('publishedAt');
	const formattedPublishedAt = dayjs(publishedAt).format('MMMM D, YYYY');

	const [arialData, arialBoldData] = await Promise.all([arial, arialBold]);

	return new ImageResponse(
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
					<img src={`${url.origin}/images/favicon/android-chrome-192x192.png`} width={64} height={64}/>
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
						{tags.map(tag => (
							<div key={tag} style={{display: 'flex', marginRight: '1rem'}}><span style={{color: 'gray', marginRight: '2ch'}}>#</span>{tag}</div>
						))}
					</div>

					<div style={{marginLeft: 'auto', fontSize: 26, textTransform: 'lowercase'}}>
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
};

export default handler;
