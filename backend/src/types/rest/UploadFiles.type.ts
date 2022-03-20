import { GridFile } from "multer-gridfs-storage"

export interface UploadFiles {
    file?:GridFile[],
    images?:GridFile[]
}