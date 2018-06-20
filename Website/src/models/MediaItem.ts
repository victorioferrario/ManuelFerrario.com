export interface IMediaItem {
    ClientName:string;
    DocumentTitle:string;
    DocumentUrl:string;
}
export class MediaItem implements IMediaItem {    
    constructor(
        public ClientName:string, 
        public DocumentTitle:string, 
        public DocumentUrl:string){
    }
}