import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero/hero';
import { UNAVAILABLE_HEROES } from 'src/app/models/constants';

@Component({
    selector: 'app-drafting',
    templateUrl: './drafting.component.html',
    styleUrls: ['./drafting.component.scss'],
})
export class DraftingComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    constructor(private readonly heroService: HeroService) {}

    ngOnInit() {
        this.heroes$ = this.heroService.getHeroes$().pipe(
            map((heroes) => {
                return heroes.filter(
                    (x) => !UNAVAILABLE_HEROES.find((y) => y === x.id),
                );
            }),
        );
    }
}
