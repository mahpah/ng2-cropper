# Angular2 component wrapper for CropperJS

## Dependencies
This component require
- [CropperJS](https://github.com/fengyuanchen/cropperjs)


## Manual

Install via npm

```
npm install --save @mahpah/angular-cropper
```

This package export `InlineCropperModule` which export only the `<image-cropper>` element which you can put any where.

```
// module

@NgModule({
	imports: [
		// ...
		InlineCropperModule,
	]

	// ...
})
```
```
// template
<image-cropper [imageUrl]="someUrl"/>
```

## License
```
					DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
									Version 2, December 2004

Copyright (C) 2016 DgmTeam <contact@digimed.vn>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

					DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
```
