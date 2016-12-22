import Cropper from 'cropperjs';
import { EventEmitter, ElementRef } from '@angular/core';
export interface IImageCropperSetting {
    width: number;
    height: number;
}
export interface IImageCropperResult {
    imageData: Cropper.ImageData;
    cropData: Cropper.CropBoxData;
    blob?: Blob;
    dataUrl?: string;
}
export declare class ImageCropper {
    imageUrl: any;
    settings: IImageCropperSetting;
    cropbox: Cropper.CropBoxData;
    loadImageErrorText: string;
    cropperOptions: Cropper.CropperOptions;
    image: ElementRef;
    export: EventEmitter<IImageCropperResult>;
    ready: EventEmitter<{}>;
    private isLoading;
    private cropper;
    private imageElement;
    private loadError;
    imageLoaded(ev: Event): void;
    imageLoadError(event: any): void;
    exportCanvas(base64?: any): void;
    private readonly cropperOption;
}
