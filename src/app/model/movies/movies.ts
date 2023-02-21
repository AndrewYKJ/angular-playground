export interface Movies {
    moviesList: MoviesList[];
}

export interface MoviesList {
    company: string;
    list:    List[];
}

export interface List {
    name:   string;
    series: Series[];
}

export interface Series {
    name:        string;
    releaseDate: string;
    description: string;
}
