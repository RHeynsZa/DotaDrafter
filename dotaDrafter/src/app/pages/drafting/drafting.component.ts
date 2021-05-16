import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero/hero';

@Component({
    selector: 'app-drafting',
    templateUrl: './drafting.component.html',
    styleUrls: ['./drafting.component.scss'],
})
export class DraftingComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    constructor(private readonly heroService: HeroService) {}

    ngOnInit() {
        this.heroes$ = this.heroService.getHeroes$().pipe(tap(console.log));
    }
}
