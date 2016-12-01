import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { IImageCropperSetting } from '../../image-cropper/image-cropper.component';
export declare class ImageCropperModalContext extends BSModalContext {
    imageUrl: string;
    settings: IImageCropperSetting;
    modalTitle: string;
    buttonCloseCaption: string;
    buttonSaveCaption: string;
}
export declare class ImageCropperModal implements ModalComponent<ImageCropperModalContext> {
    dialog: DialogRef<ImageCropperModalContext>;
    private context;
    constructor(dialog: DialogRef<ImageCropperModalContext>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    saveData(data: any): void;
}
