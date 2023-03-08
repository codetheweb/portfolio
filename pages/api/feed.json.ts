import {NextApiHandler} from 'next';
import {getFeed} from '../../lib/get-feed';

const handler: NextApiHandler = async (request, response) => {
	const feed = await getFeed();

	response.json(JSON.parse(feed.json1()));
};

export default handler;
