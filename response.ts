export interface Res {
	statusCode: number;
	body: string;
	headers: { [key: string]: string };
}

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "authorization,content-type,origin",
	"Content-Type": "application/json"
};

export const Response = {
	success: (data: any): Res =>{
		const body = JSON.stringify(data, null, 2);
		return { statusCode: 200, headers, body };
	},
	fail: (message: string):Res => {
		return { statusCode: 412, headers, body: message };
	}
}

export default Response;
