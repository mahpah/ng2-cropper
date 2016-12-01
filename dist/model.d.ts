export interface IImageView {
    relativeUrl: string;
    fullUrl: string;
}
export interface IImageCropView {
    fileName: string;
    originImage: IImageView;
    croppedImage: IImageView;
    cropDimension: ICropDimension;
}
export interface ICropDimension {
    top: number;
    left: number;
    width: number;
    height: number;
}
