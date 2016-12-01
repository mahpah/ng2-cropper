import Cropper from 'cropperjs'
import {
	Component,
	Input,
	ViewChild,
	Output,
	EventEmitter,
	ViewEncapsulation,
} from '@angular/core'

export interface IImageCropperSetting {
	width: number
	height: number
}

export interface IImageCropperResult {
	imageData: Cropper.ImageData,
	cropData: Cropper.CropBoxData,
	blob?: Blob,
	dataUrl?: string,
}

@Component({
	selector: 'image-cropper',
	providers: [  ],
	styleUrls: ['./image-cropper.component.scss', './cropper.scss'],
	templateUrl: './image-cropper.component.jade',
	encapsulation: ViewEncapsulation.None,
})
export class ImageCropper {
	@Input() imageUrl
	@Input() settings: IImageCropperSetting
	@Input() cropbox: Cropper.CropBoxData
	@Input() loadImageErrorText: string
	@ViewChild('image') image
	@Output() export = new EventEmitter<IImageCropperResult>()
	@Output() ready = new EventEmitter()
	private isLoading = true
	private cropper: Cropper
	private imageElement: HTMLImageElement
	private loadError

	imageLoaded(ev: Event) {
		this.loadError = false
		let image = ev.target as HTMLImageElement
		this.imageElement = image
		image.crossOrigin = 'anonymous'

		image.addEventListener('ready', () => {
			this.ready.emit(true)
			this.isLoading = false
			if (this.cropbox) {
				this.cropper.setCropBoxData(this.cropbox)
			}
		})

		this.cropper = new Cropper(image, this.cropperOption)
	}

	imageLoadError(event) {
		this.loadError = true
		this.isLoading = false
	}

	exportCanvas(base64?) {
		let imageData = this.cropper.getImageData()
		let cropData = this.cropper.getCropBoxData()
		let canvas = this.cropper.getCroppedCanvas()
		let data = {
			imageData,
			cropData,
		}

		let promise = new Promise(resolve => {
			if (base64) {
				return resolve({
					dataUrl: canvas.toDataURL('image/png'),
				})
			}
			canvas.toBlob(blob => resolve({ blob }))
		})

		promise.then(res => {
			this.export.emit(Object.assign(data, res))
		})
	}

	private get cropperOption(): Cropper.CropperOptions {
		let aspectRatio = NaN
		if (this.settings) {
			let { width, height } = this.settings
			aspectRatio = width / height
		}

		return {
			aspectRatio,
			movable: false,
			scalable: false,
			zoomable: false,
		}
	}
}
