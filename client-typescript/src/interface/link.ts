export interface Match {
	match: {
		teams: Team[];
	};
}

export interface Team {
	name: string;
	score: number;
}

export interface Link {
	title: string;
	thumb: string;
	comment: string;
	ctime: string;
	articleId: string;
}

export interface Feed {
	__typename: any;
	links: Link[];
	offset: string;
}
