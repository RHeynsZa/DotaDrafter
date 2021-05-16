import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroPortraitComponent } from './components/hero-portrait/hero-portrait.component';
import { DraftingDisplayComponent } from './components/drafting-display/drafting-display.component';

@NgModule({
    declarations: [HeroPortraitComponent, DraftingDisplayComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
    ],
    exports: [
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        HeroPortraitComponent,
        DraftingDisplayComponent,
    ],
})
export class SharedModule {}
