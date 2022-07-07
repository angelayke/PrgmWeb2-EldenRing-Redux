class EldenService {
	constructor() { }

	url = "https://eldenring.fanapis.com/api/creatures";

	async getEldenrings() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).data;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getEldenringWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}

export default EldenService;