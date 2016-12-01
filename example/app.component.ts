import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
	selector: 'app',
	providers: [  ],
	templateUrl: './app.component.jade',
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
