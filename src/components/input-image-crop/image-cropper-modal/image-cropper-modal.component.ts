import { Component } from '@angular/core'
import { DialogRef, ModalComponent } from 'angular2-modal'
import { BSModalContext } from 'angular2-modal/plugins/bootstrap'
import { IImageCropperSetting } from '../../image-cropper/image-cropper.component'

export class ImageCropperModalContext extends BSModalContext {
	imageUrl: string
	settings: IImageCropperSetting
	modalTitle: string
	buttonCloseCaption: string
	buttonSaveCaption: string
}

@Component({
	selector: 'image-cropper-modal',
	providers: [  ],
	// styleUrls: ['./image-cropper-modal.component.scss'],
	templateUrl: './image-cropper-modal.component.jade',
})
export class ImageCropperModal implements ModalComponent<ImageCropperModalContext> {
	private context

	constructor(
		public dialog: DialogRef<ImageCropperModalContext>
	) {
		this.context = this.dialog.context
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

	saveData(data) {
		this.dialog.close(data)
	}
}
