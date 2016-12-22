import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
	selector: 'app',
	providers: [  ],
	templateUrl: './app.component.jade',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	private form: FormGroup

	constructor(
		private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			image: [],
		})
	}

	ngOnDestroy() {
	}
}
