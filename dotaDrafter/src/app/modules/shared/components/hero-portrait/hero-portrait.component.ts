import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { Hero } from 'src/app/models/hero/hero';

@Component({
    selector: 'app-hero-portrait',
    templateUrl: './hero-portrait.component.html',
    styleUrls: ['./hero-portrait.component.scss'],
})
export class HeroPortraitComponent {
    @Input()
    hero: Hero;
    @Input()
    active = true;
    @Output()
    heroClicked = new EventEmitter<Hero>();

    emitHero(): void {
        if (this.active) {
            this.heroClicked.emit(this.hero);
        }
    }
}
