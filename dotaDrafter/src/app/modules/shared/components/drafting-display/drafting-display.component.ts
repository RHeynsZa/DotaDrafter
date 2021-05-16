import { Component } from '@angular/core';

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
}
