
declare const enum AdLoaderAdType {

	CustomNative = 0,

	GAMBanner = 1,

	Native = 2
}

declare const enum Orientation {

	Portrait = 0,

	Landscape = 1,

	Device = 2
}

declare class TNSGA extends NSObject {

	static alloc(): TNSGA; // inherited from NSObject

	static createAnchoredAdaptiveBanner(width: Width, orientation: Orientation): GADAdSize;

	static createAnchoredAdaptiveBannerWithWidth(width: number, orientation: Orientation): GADAdSize;

	static createInlineAdaptiveBanner(width: Width, orientation: Orientation): GADAdSize;

	static createInlineAdaptiveBannerWithWidth(width: number, orientation: Orientation): GADAdSize;

	static AdLoaderAdTypeToString(type: AdLoaderAdType): string;

	static new(): TNSGA; // inherited from NSObject
}

declare const enum Width {

	FullWidth = 0,

	AutoHeight = 1
}
