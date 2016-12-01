import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputImageCrop } from './components/input-image-crop/input-image-crop.component'
import { ImageCropperModal } from './components/input-image-crop/image-cropper-modal/image-cropper-modal.component'
import { ModalModule } from 'angular2-modal'
import { InlineCropperModule } from './inline-cropper.module'

@NgModule({
	imports: [
		CommonModule,
		ModalModule,
		InlineCropperModule,
	],

	declarations: [
		ImageCropperModal,
		InputImageCrop,
	],

	exports: [
		InlineCropperModule,
		ImageCropperModal,
		InputImageCrop,
	],

	entryComponents: [
		ImageCropperModal,
	],
})
export class NgCropModule {

}
