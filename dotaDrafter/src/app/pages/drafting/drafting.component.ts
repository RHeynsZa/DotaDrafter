import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero/hero';
import { PICK_ORDER, UNAVAILABLE_HEROES } from 'src/app/models/constants';

@Component({
    selector: 'app-drafting',
    templateUrl: './drafting.component.html',
    styleUrls: ['./drafting.component.scss'],
})
export class DraftingComponent implements OnInit {
    pickOrder = PICK_ORDER;
    currentStage = 0;
    heroListLeft: Hero[];
    heroListRight: Hero[];
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
        this.heroListLeft = [];
        this.heroListRight = [];
    }

    addHeroToList(hero: Hero) {
        if (this.pickOrder[this.currentStage] === 'L') {
            this.heroListLeft.push(hero);
        } else {
            this.heroListRight.push(hero);
        }
        this.currentStage++;
    }

    checkHeroAvailable(hero: Hero): boolean {
        return (
            !this.heroListLeft.find((x) => x.name === hero.name) &&
            !this.heroListRight.find((x) => x.name === hero.name)
        );
    }
}
