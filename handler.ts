import { APIGatewayEvent } from 'aws-lambda';
import Response, { Res } from './response';

export const main = async (event: APIGatewayEvent): Promise<Res> => {
	const message = "hello from lambda";
	return Response.success({ message, event });
};

export default main;
