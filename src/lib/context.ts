import { getContext, setContext } from 'svelte';

interface Active {
	path: string;
}

interface Config {
	site: {
		title: string;
		description: string;
		author: string;
	};
	pages: {
		[key: string]: {
			title: string;
			path: string;
		};
	};
	content: {
		[key: string]: string | string[];
	};
}

export const getActive = () => getContext<Active>('active');

export const setActive = (active: Active) => setContext('active', active);

export const getConfig = () => getContext<Config>('config');

export const setConfig = (config: Config) => setContext('config', config);
