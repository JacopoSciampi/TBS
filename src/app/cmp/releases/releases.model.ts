export class SingleReleaseModel {
    public imageUrl: string;
    public track: TrackInfo;
    public urlRedirect?: string;
}

export class TrackInfo {
    public author: string;
    public name: string;
    public genere: string;
    public yearPub: number;
    public youtubeUrl?: string;
    public soundcloudUrl?: string;
    public spotifyUrl?: string;
}
