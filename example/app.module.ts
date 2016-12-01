import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { InlineCropperModule } from '../src'
import { ReactiveFormsModule } from '@angular/forms'
import { ModalModule } from 'angular2-modal'
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap'

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		InlineCropperModule,
		ModalModule.forRoot(),
		BootstrapModalModule,
	],

	declarations: [
		AppComponent,
	],

	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
