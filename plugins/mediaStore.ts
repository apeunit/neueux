import MediaStore, { MediaUploadOptions, MediaList, MediaListOptions, Media } from 'types/MediaStore';
import Axios from 'axios';

export class CloudinaryMediaStore implements MediaStore {
  accept = '*';
  persist(files: MediaUploadOptions[]): Promise<Media[]> {
   
    return (async () => {
      const medias = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i].file
        var form = new FormData();
        form.append('image', file);
        form.append('directory', files[i].directory);
        const { data } = await Axios.post('/api/cloudinary/upload', form, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        medias.push(this.fileParser(data))
      }
      return medias;
    })()

  }
  previewSrc(src: string): string | Promise<string> {
    return src;
  }
  list(options?: MediaListOptions): Promise<MediaList> {
    const limit = 500;

    return (async () => {
      const result = await Axios.get('/api/cloudinary/list', {
        params: {
          tag: options.directory,
          type: 'image',
          max_results: limit,
          next_cursor: options.nextOffset,
        }
      });
      const items = result.data.resources.map((item) => {
        return this.fileParser(item, options.directory);
      });

      const medias: MediaList = {
        items,
        limit,
        offset: 0,
        totalCount: limit
      };
      return medias;
    })()
  }
  delete(media: Media): Promise<void> {
    return Axios.delete('/api/cloudinary/delete', {
      params: {
        id: media.id,
      }
    });
  }
  fileParser(data: any, dir= ''): Media {
    const filename = (`${data.public_id}.${data.format}`).replace(`${dir}/`, '');
    const directory = data.secure_url.replace(filename, '');
    return {
      type: 'file',
      id: data.public_id,
      directory,
      filename,
      previewSrc: data.secure_url
    }
  }
}