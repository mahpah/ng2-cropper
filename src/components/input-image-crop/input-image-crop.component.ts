import { Component, forwardRef, Input, ViewChild, ElementRef, Renderer } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { ImageCropperModal } from './image-cropper-modal/image-cropper-modal.component'
import { overlayConfigFactory } from 'angular2-modal'
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap'
import { DomSanitizer } from '@angular/platform-browser'
import { IImageView, IImageCropView } from '../../model'
import { IImageCropperSetting, IImageCropperResult } from '../image-cropper/image-cropper.component'

function maybe<T>(value) {
	return (value || {}) as T
}

@Component({
	selector: 'input-image-crop',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputImageCrop),
		multi: true,
	}],
	styleUrls: ['./input-image-crop.component.scss'],
	templateUrl: './input-image-crop.component.jade',
})
export class InputImageCrop implements ControlValueAccessor {
	@Input() settings: IImageCropperSetting
	@Input() recropable: boolean
	@Input() modalTitle = 'Crop image'
	@Input() buttonSaveCaption = 'Save'
	@Input() buttonCloseCaption = 'Close'
	private onChange: Function
	private onTouched: Function
	private croppedUrl
	private croppedRelativeUrl: string
	private value: IImageView | IImageCropView
	private origin: {
		fullUrl: string | File,
		relativeUrl?: string,
	}
	private fileName: string
	private cropbox
	@ViewChild('label') private labelRef: ElementRef

	constructor(
		private sanitizer: DomSanitizer,
		private modal: Modal,
		private renderer: Renderer,
	) {}

	writeValue(value?: IImageView | IImageCropView) {
		if (this.recropable) {
			value = maybe<IImageCropView>(value)
			this.croppedUrl = maybe<IImageView>(value.croppedImage).fullUrl
			this.croppedRelativeUrl = maybe<IImageView>(value.croppedImage).relativeUrl
			this.origin = value.originImage
			this.fileName = value.fileName
			this.cropbox = value.cropDimension
			return
		}

		value = maybe<IImageView>(value)
		this.croppedUrl = value ? value.fullUrl : undefined
		this.croppedRelativeUrl = value.relativeUrl
	}

	registerOnChange(fn) {
		this.onChange = fn
	}

	registerOnTouched(fn) {
		this.onTouched = fn
	}

	openCropperWindow(input: HTMLInputElement) {
		let file = input.files[0]
		if (!file) {
			return
		}
		this.origin = {
			fullUrl: file,
		}
		this.fileName = file.name
		let url = URL.createObjectURL(file)
		let imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
		this.openModal(imageUrl)
			.then(result => {
				if (!result) { // clear input
					input.value = ''
					return
				}
				this.cropbox = result.cropData
				return this.updateValue(result)
			})
			.then(() => {
				URL.revokeObjectURL(url)
			})
	}

	ngOnDestroy() {
		URL.revokeObjectURL(this.croppedUrl)
	}

	ngAfterViewInit() {
		let label = this.labelRef.nativeElement as HTMLLabelElement
		let width = label.offsetWidth
		if (this.settings) {
			let height = this.settings.height / this.settings.width * width
			this.renderer.setElementStyle(label, 'minHeight', `${height}px`)
		}

	}

	remove(ev: Event) {
		ev.stopPropagation()
		this.croppedUrl = undefined
		this.onChange(undefined)
	}

	editImage(evnt: Event) {
		event.stopPropagation()

		if (!this.recropable) {
			return
		}

		this.openModal(this.origin.fullUrl)
			.then(result => this.updateValue(result))
	}

	get isEmpty() {
		return !this.croppedUrl
	}

	private openModal(imageUrl) {
		let config = overlayConfigFactory({
			imageUrl,
			settings: this.settings,
			cropbox: this.cropbox,
			modalTitle: this.modalTitle,
			buttonSaveCaption: this.buttonSaveCaption,
			buttonCloseCaption: this.buttonCloseCaption,
			size: 'lg',
		}, BSModalContext)
		return this.modal.open(ImageCropperModal, config)
			.then(r => r.result)
			.catch(_ => undefined)
	}

	private updateValue(result: IImageCropperResult) {
		if (!result) {
			return
		}

		this.value = this.transform(result)

		if (this.onChange) {
			this.onChange(this.value)
		}
	}

	private transform(result: IImageCropperResult): IImageCropView | IImageView {
		if (this.croppedUrl) {
			URL.revokeObjectURL(this.croppedUrl)
		}

		this.croppedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
			URL.createObjectURL(result.blob))

		if (this.recropable) {
			let ret = {} as IImageCropView
			ret.cropDimension = result.cropData
			ret.fileName = this.fileName
			ret.originImage = this.origin as IImageView
			ret.croppedImage = {
				fullUrl: result.blob as any,
				relativeUrl: this.croppedRelativeUrl,
			}

			return ret
		}

		let ret = {} as IImageView
		ret.fullUrl = result.blob as any
		ret.relativeUrl = this.croppedRelativeUrl
		return ret
	}
}
