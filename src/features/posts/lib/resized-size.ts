interface OutputInfo {
  width: number;
  height: number;
  /** Height of one frame; sharp sets it for animated images. */
  pageHeight?: number;
}

/**
 * Display size of a processed image. An animated image's output height is
 * every frame stacked, so one frame's height is used instead.
 */
export function resizedSize(info: OutputInfo): {
  width: number;
  height: number;
} {
  return { width: info.width, height: info.pageHeight ?? info.height };
}
