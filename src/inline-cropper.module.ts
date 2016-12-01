import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImageCropper } from './components/image-cropper/image-cropper.component'

@NgModule({
	imports: [
		CommonModule,
	],

	declarations: [
		ImageCropper,
	],

	exports: [
		ImageCropper,
	],
})
export class InlineCropperModule {}
