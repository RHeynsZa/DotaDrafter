import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero/hero';

@Component({
    selector: 'app-drafting-display',
    templateUrl: './drafting-display.component.html',
    styleUrls: ['./drafting-display.component.scss'],
})
export class DraftingDisplayComponent {
    readonly draftingOrder = [
        'BAN',
        'BAN',
        'PICK',
        'PICK',
        'BAN',
        'BAN',
        'BAN',
        'PICK',
        'PICK',
        'BAN',
        'BAN',
        'PICK',
    ];
    @Input()
    heroList: Hero[];
}
