import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero, HeroApiData } from '../models/hero/hero';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    readonly apiUrl = 'https://api.opendota.com/api';

    constructor(private readonly http: HttpClient) {}

    getHeroes$(): Observable<Hero[]> {
        return this.http
            .get<HeroApiData[]>(`${this.apiUrl}/heroes`)
            .pipe(map((res) => plainToClass(Hero, res as HeroApiData[])));
    }
}
