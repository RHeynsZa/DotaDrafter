import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-drafting',
    templateUrl: './drafting.component.html',
    styleUrls: ['./drafting.component.scss'],
})
export class DraftingComponent implements OnInit {
    constructor(private readonly heroService: HeroService) {}

    ngOnInit() {
        this.heroService.getHeroes().pipe(tap(console.log)).subscribe();
    }
}
