export default class Album {
    constructor(id, {title, subtitle = '', keywords = [], date, assets = [], cover}) {
        this.id = id;
        this.meta = {
            title: title,
            subtitle: subtitle,
            keywords: keywords,
            date: date,
            cover: cover
        };
        this.assets = assets
    }

    addAsset(asset) {
        this.assets.push(asset);
    }
}