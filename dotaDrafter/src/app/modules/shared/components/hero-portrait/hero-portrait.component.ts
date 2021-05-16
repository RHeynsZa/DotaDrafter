import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero/hero';

@Component({
    selector: 'app-hero-portrait',
    templateUrl: './hero-portrait.component.html',
    styleUrls: ['./hero-portrait.component.scss'],
})
export class HeroPortraitComponent {
    @Input()
    hero: Hero;
}
