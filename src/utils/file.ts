const documentFormats: { [format: string]: string[] } = {
  word: ['doc', 'docx'],
  excel: ['xls', 'xlsx'],
  ppt: ['ppt', 'pptx'],
  txt: ['txt', 'text', 'md'],
  pdf: ['pdf'],
  zip: ['zip', 'rar', '7z', '.gz']
};
const multimedia: { [format: string]: string[] } = {
  video: ['avi', 'mp4'],
  image: ['jpg', 'jpeg', 'png', 'gif'],
  audio: ['mp3', 'aac', 'ogg', 'm4a']
};

const supportedFileFormats = {
  ...documentFormats,
  ...multimedia
};

const iconMap: { [key: string]: string } = Object.entries(supportedFileFormats).reduce(
  (map, [icon, extensions]) => {
    extensions.forEach(ext => (map[ext] = icon));
    return map;
  },
  {} as { [key: string]: string }
);
export const fileExtImg = (fileName: string) => {
  const _extractExtension = (filename: string): string => {
    const match = filename.toLowerCase().match(/\.([a-z0-9]+)$/i);
    return match ? match[1] : '';
  };

  const ext = _extractExtension(fileName);

  // 返回匹配到的图标，找不到则返回默认图标
  return new URL(`../assets/img/ext-icons/${iconMap[ext] || `unknown`}.png`, import.meta.url).href;
};
