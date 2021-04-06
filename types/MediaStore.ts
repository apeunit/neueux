export default interface MediaStore {
    accept: string
    persist(files: MediaUploadOptions[]): Promise<Media[]>
    previewSrc(
        src: string,
        fieldPath?: string,
        formValues?: any
    ): Promise<string> | string
    list(options?: MediaListOptions): Promise<MediaList>
    delete(media: Media): Promise<void>
}

export interface Media {
    type: 'file' | 'dir'
    id: string
    directory: string
    filename: string
    previewSrc?: string
}

export interface MediaList {
    items: Media[]
    limit: number
    offset: number
    nextOffset?: number
    totalCount: number
}

export interface MediaUploadOptions {
    directory: string
    file: File
}

export interface MediaListOptions {
    directory?: string
    limit?: number
    offset?: number
    nextOffset?: number
}