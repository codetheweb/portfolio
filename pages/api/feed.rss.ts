import {NextApiHandler} from 'next';
import {getFeed} from '../../lib/get-feed';

const handler: NextApiHandler = async (request, response) => {
	const feed = await getFeed();

	response.setHeader('content-type', 'application/rss+xml; charset=utf-8');
	response.end(feed.rss2());
};

export default handler;
