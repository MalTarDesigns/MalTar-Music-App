/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

export interface IBeat {
  title: String
  producer: String
  artworkUrl?: String
  genre: String
  price: Number
  url: String
  likes?: Number
}
