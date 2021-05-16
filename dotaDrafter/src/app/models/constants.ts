export const IMAGESIZE_ENUM = {
    SMALL: {
        // ~10KB
        suffix: 'sb.png',
        width: 59,
        height: 33,
    },
    MEDIUM: {
        // ~41KB
        suffix: 'lg.png',
        width: 205,
        height: 115,
    },
    LARGE: {
        // ~52KB
        suffix: 'full.png',
        width: 256,
        height: 144,
    },
    VERT: {
        // ~18KB note that this is a jpg
        suffix: 'vert.jpg',
        width: 235,
        height: 272,
    },

    // if you ever wanna see what the above look like (change the suffix):
    // https://api.opendota.com/apps/dota2/images/heroes/abaddon_full.png
};
