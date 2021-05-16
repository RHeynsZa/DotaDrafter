import { Transform } from 'class-transformer';
import { IMAGESIZE_ENUM } from '../constants';

enum ATTRIBUTE_ENUM {
    agi,
    str,
    dex,
}
enum ROLES_ENUM {
    Carry,
    Escape,
    Nuker,
    Pusher,
    Support,
}

export interface HeroApiData {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    legs: number;
}

export class Hero {
    id: number;
    @Transform(({ value }) => (value as string).replace('npc_dota_hero_', ''), {
        toClassOnly: true,
    })
    name: string;
    localized_name: string;
    primary_attr: ATTRIBUTE_ENUM;
    attack_type: string;
    roles: ROLES_ENUM[];
    legs: number;

    getImage(imageSize = IMAGESIZE_ENUM.MEDIUM): string {
        const imageCDNUrl =
            'https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes';
        return `${imageCDNUrl}/${this.name}_${imageSize.suffix}`;
    }
}
