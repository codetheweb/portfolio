import {NextApiHandler} from 'next';
import {getFeed} from '../../lib/get-feed';

const handler: NextApiHandler = async (request, response) => {
	const feed = await getFeed();

	response.setHeader('content-type', 'application/atom+xml; charset=utf-8');
	response.end(feed.atom1());
};

export default handler;
