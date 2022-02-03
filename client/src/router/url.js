import { urlGenerator } from "@/utils/urlGenerator";

const urls = {
  //  words
  indexWords: 'words',
  storeWord: 'words',
  updateWord: 'words/:word',
};

export default urlGenerator(urls);
