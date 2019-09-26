import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
